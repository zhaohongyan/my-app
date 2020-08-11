// 不可以使用es module
const fs = require('fs');
const path = require('path');

const mockDir = path.join(__dirname)
const mock = {};

function readFileSync(dir, isRoot) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const info = fs.statSync(`${dir}/${file}`)
    if (info.isDirectory()) {
      readFileSync(`${dir}/${file}`, false);
    } else {
      if (!(isRoot && file === 'index.js')) {
        Object.assign(mock, require(`${dir}/${file}`))
      }
    }
  })
}

readFileSync(mockDir, true);
module.exports = mock;
