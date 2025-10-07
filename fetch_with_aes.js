(async ()=>{
  const fetch = globalThis.fetch
  const vm = await import('vm');

  const base = 'http://cuckold.great-site.net/';
  console.log('Fetching main page...');
  const mainRes = await fetch(base);
  const mainHtml = await mainRes.text();

  // Extract the hex strings a, b, c from the inline script
  const hexRegex = /var a=toNumbers\("([0-9a-fA-F]+)"\),b=toNumbers\("([0-9a-fA-F]+)"\),c=toNumbers\("([0-9a-fA-F]+)"\)/;
  const m = mainHtml.match(hexRegex);
  if(!m){
    console.error('Could not find hex values in page HTML');
    console.log('Page snippet:\n', mainHtml.substr(0,800));
    process.exit(2);
  }
  const ha = m[1];
  const hb = m[2];
  const hc = m[3];
  console.log('Found hex a,b,c lengths:', ha.length, hb.length, hc.length);

  console.log('Fetching /aes.js...');
  const aesRes = await fetch(base + 'aes.js');
  const aesCode = await aesRes.text();

  // Prepare a sandbox and load aes.js
  const sandbox = {console, slowAES: undefined};
  vm.createContext(sandbox);
  try{
    vm.runInNewContext(aesCode, sandbox);
  } catch(e){
    console.error('Error executing aes.js in VM:', e);
    process.exit(3);
  }
  if(!sandbox.slowAES){
    console.error('slowAES not found in aes.js sandbox');
    // try if aes.js exports different name
  }

  // Build helper functions (toNumbers, toHex) matching protection script
  function toNumbers(hex){
    const out = [];
    for(let i=0;i<hex.length;i+=2) out.push(parseInt(hex.substr(i,2),16));
    return out;
  }
  function toHex(arr){
    return arr.map(b=> (b<16? '0':'') + b.toString(16)).join('');
  }

  const a = toNumbers(ha);
  const b = toNumbers(hb);
  const c = toNumbers(hc);

  // call slowAES.decrypt(c,2,a,b)
  try{
    const tokenBytes = sandbox.slowAES.decrypt(c,2,a,b);
    const token = toHex(tokenBytes);
    console.log('__test token:', token);

    // Now fetch main page with cookie
    const res2 = await fetch(base, {headers: {Cookie: '__test=' + token}});
    const text2 = await res2.text();
    console.log('Status with cookie:', res2.status);
    console.log('Response snippet:\n', text2.substr(0,1500));
  } catch(e){
    console.error('Error computing token or fetching with cookie:', e);
    process.exit(4);
  }
})();
