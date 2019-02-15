const path = require('path');

const markdownGenerator = require('../source');
const environment = require('./environment');

markdownGenerator({
    outputLocation: environment.output.docs,
    title: 'Markdown Generator',
    templateLocations: {
        table: path.resolve(__dirname, './table.tpl.html'),
    }
});