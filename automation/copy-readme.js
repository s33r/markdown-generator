const fs = require('fs-extra');
const path = require('path');

const inputLocation = path.resolve(__dirname, '../documentation/index.md');
const outputLocation = path.resolve(__dirname, '../README.md');

fs.copySync(inputLocation, outputLocation);