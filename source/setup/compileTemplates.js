const _ = require('lodash');

module.exports = function compileTemplates(templates) {
    return _.mapValues(templates, value => !!value ? _.template(value) : null);
};