const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist/dmfl/browser');
const srcFile = path.join(distDir, 'index.html');
const destFile = path.join(distDir, '404.html');

fs.copyFileSync(srcFile, destFile);
console.log('404.html copied to dist.');