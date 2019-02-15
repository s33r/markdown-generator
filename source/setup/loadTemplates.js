const _ = require('lodash');
const fs = require('fs-extra');

module.exports = function loadTemplates(templateLocations) {
    return _.mapValues(templateLocations, value => !!value ? fs.readFileSync(value, { encoding: 'utf8' }) : null);
};