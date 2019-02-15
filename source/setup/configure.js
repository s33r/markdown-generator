const _ = require('lodash');

const defaultOptions = require('./defaultOptions');
const compileTemplates = require('./compileTemplates');
const loadTemplates = require('./loadTemplates');

module.exports = function configure(options) {
    const defaults = defaultOptions();
    const result = {};

    _.merge(result, options, defaults);

    const templateStrings = loadTemplates(result.templateLocations);

    _.merge(result.templates, templateStrings);
    _.merge(result.templates, compileTemplates(templateStrings));

    return result;
};