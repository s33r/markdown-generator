const del = require('del');

const environment = require('./environment');

//environment
del([
    environment.output.coverage,
    environment.output.docs,
]);