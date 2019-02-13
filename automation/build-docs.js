const path = require('path');
const markdownGenerator = require('../source');

markdownGenerator({
    outputLocation: path.resolve(__dirname, '../docs'),
});