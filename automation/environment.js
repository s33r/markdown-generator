const path = require('path');

const environment = {};

environment.repository = {};
environment.repository.location = path.resolve(__dirname, '..');
environment.repository.documentation = path.resolve(environment.repository.location, './documentation');
environment.repository.source = path.resolve(environment.repository.location, './source');

environment.output = {};
environment.output.docs = path.resolve(environment.repository.location, './docs');
environment.output.coverage = path.resolve(environment.repository.location, './coverage');

module.exports = environment;