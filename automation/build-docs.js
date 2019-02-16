const markdownGenerator = require('../source');
const environment = require('./environment');

const theme = require('./theme');

markdownGenerator({
    inputLocation: environment.repository.documentation,
    outputLocation: environment.output.docs,
    title: 'Markdown Generator',
    ...theme,
});