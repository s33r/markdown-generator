const fs = require('fs-extra');
const path = require('path');

const environment = require('./environment');

const inputLocation = path.resolve(environment.repository.documentation, './index.md');
const outputLocation = path.resolve(environment.repository.location, './README.md');

fs.copySync(inputLocation, outputLocation);