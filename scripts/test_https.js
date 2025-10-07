import https from 'https';

const host = process.argv[2] || 'www.cuckold.great-site.net';
const path = process.argv[3] || '/';

function doRequest(options) {
  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk.toString());
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, headers: res.headers, body });
      });
    });
    req.on('error', (err) => resolve({ error: err.message }));
    req.end();
  });
}

(async function(){
  console.log('Attempting strict HTTPS request');
  const strict = await doRequest({ host, path, method: 'GET', port: 443 });
  console.log('STRICT RESULT:');
  console.log(strict.error ? ('ERROR: ' + strict.error) : (`Status: ${strict.statusCode}\nHeaders: ${JSON.stringify(strict.headers)}\nBody snippet: ${strict.body.slice(0,400)}`));

  console.log('\nAttempting permissive HTTPS request (ignore TLS errors)');
  const permissive = await doRequest({ host, path, method: 'GET', port: 443, rejectUnauthorized: false, agent: new https.Agent({ rejectUnauthorized: false }) });
  console.log('PERMISSIVE RESULT:');
  console.log(permissive.error ? ('ERROR: ' + permissive.error) : (`Status: ${permissive.statusCode}\nHeaders: ${JSON.stringify(permissive.headers)}\nBody snippet: ${permissive.body.slice(0,400)}`));
})();
