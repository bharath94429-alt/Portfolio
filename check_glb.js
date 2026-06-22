import fs from 'fs';
const buf = fs.readFileSync('src/components/card.glb');
console.log('Size:', buf.length);
console.log('Magic:', buf.toString('utf8', 0, 4));
