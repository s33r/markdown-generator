const markdownGenerator = require('../source');
const environment = require('./environment');

markdownGenerator({
    outputLocation: environment.output.docs,
    title: 'Markdown Generator'
});