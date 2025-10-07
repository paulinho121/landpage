import tls from 'tls';

const host = process.argv[2] || 'www.cuckold.great-site.net';
const port = Number(process.argv[3] || 443);

async function main() {
  try {
    const socket = tls.connect({ host, port, servername: host, rejectUnauthorized: false }, async () => {
      const cert = socket.getPeerCertificate(true);
      const cipher = socket.getCipher();
      const protocol = socket.getProtocol();

      console.log('Connected to', host + ':' + port);
      console.log('TLS protocol:', protocol);
      console.log('Cipher:', cipher);
      if (!cert || Object.keys(cert).length === 0) {
        console.log('No certificate presented by the server');
        socket.end();
        return;
      }

      // Print cert fields
      console.log('\nCertificate subject:');
      console.log(cert.subject);
      console.log('\nCertificate issuer:');
      console.log(cert.issuer);
      console.log('\nValidity:');
      console.log('  valid_from:', cert.valid_from);
      console.log('  valid_to:  ', cert.valid_to);
      console.log('\nSANs:');
      console.log(cert.subjectaltname);

      // fingerprint SHA256
      if (cert.raw) {
        const { createHash } = await import('crypto');
        const fp = createHash('sha256').update(cert.raw).digest('hex').toUpperCase().match(/.{1,2}/g).join(':');
        console.log('\nSHA256 fingerprint:', fp);
      }

      socket.end();
    });

    socket.setTimeout(7000, () => { console.error('TLS connect timeout'); socket.destroy(); });
    socket.on('error', (err) => { console.error('Socket error:', err.message); });
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
