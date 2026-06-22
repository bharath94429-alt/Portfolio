import fs from 'fs';
import https from 'https';
import path from 'path';

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const urls = {
  'card.glb': 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/card.glb',
  'lanyard.png': 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/lanyard.png'
};

const dir = path.resolve('./src/components');
Promise.all(Object.entries(urls).map(([name, url]) => downloadFile(url, path.join(dir, name))))
  .then(() => console.log('Downloaded successfully'))
  .catch(err => {
    console.error('Download failed from primary URL, trying alternative...');
    // Alternate URLs if needed
    const altUrls = {
      'card.glb': 'https://raw.githubusercontent.com/pmndrs/drei-assets/master/lanyard/card.glb',
      'lanyard.png': 'https://raw.githubusercontent.com/pmndrs/drei-assets/master/lanyard/lanyard.png'
    };
    Promise.all(Object.entries(altUrls).map(([name, url]) => downloadFile(url, path.join(dir, name))))
      .then(() => console.log('Downloaded alt successfully'))
      .catch(e => console.error(e));
  });
