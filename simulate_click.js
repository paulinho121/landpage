import fs from 'fs'
import { JSDOM } from 'jsdom'

async function getFinalHtml() {
  // reuse fetch_with_aes logic inline
  const base = 'http://cuckold.great-site.net/'
  const res = await fetch(base)
  const mainHtml = await res.text()
  const hexRegex = /var a=toNumbers\("([0-9a-fA-F]+)"\),b=toNumbers\("([0-9a-fA-F]+)"\),c=toNumbers\("([0-9a-fA-F]+)"\)/
  const m = mainHtml.match(hexRegex)
  if(!m) throw new Error('no hex')
  const ha=m[1], hb=m[2], hc=m[3]

  const aesRes = await fetch(base + 'aes.js')
  const aesCode = await aesRes.text()

  const vm = await import('vm')
  const sandbox = {console, slowAES: undefined}
  vm.runInNewContext(aesCode, sandbox)
  function toNumbers(hex){const out=[]; for(let i=0;i<hex.length;i+=2)out.push(parseInt(hex.substr(i,2),16)); return out}
  function toHex(arr){return arr.map(b=> (b<16? '0':'') + b.toString(16)).join('')}
  const a=toNumbers(ha), b=toNumbers(hb), c=toNumbers(hc)
  const tokenBytes = sandbox.slowAES.decrypt(c,2,a,b)
  const token = toHex(tokenBytes)
  const res2 = await fetch(base, {headers: {Cookie: '__test=' + token}})
  const html2 = await res2.text()
  return html2
}

async function run() {
  const html = await getFinalHtml()
  // load bundle code from local dist
  const bundlePath = './dist/assets/index-CDlF7-HA.js'
  const bundleCode = fs.readFileSync(bundlePath,'utf8')
  const dom = new JSDOM(html, {runScripts:'dangerously', resources:'usable', url:'http://cuckold.great-site.net'})
  // inject script content
  const scriptEl = dom.window.document.createElement('script')
  scriptEl.textContent = bundleCode
  dom.window.document.head.appendChild(scriptEl)

  // intercept window.open
  let opened = null
  dom.window.open = function(u, t, opts){ opened = u; return {}};

  // wait for scripts to run
  await new Promise(res=> setTimeout(res,1500))

  // find button (first button with text 'QUERO' or 'GARANTIR')
  const btn = Array.from(dom.window.document.querySelectorAll('button')).find(b=> /QUERO|GARANTIR|GARANTIR MINHA CÓPIA/i.test(b.textContent))
  if(!btn) { console.log('Button not found'); return }
  btn.click()
  console.log('Clicked button. window.open captured:', opened)
}

run().catch(e=>{ console.error('Error', e); process.exit(1) })
