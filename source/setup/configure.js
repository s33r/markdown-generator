const logger = require('log4js').getLogger('main');
const _ = require('lodash');

const defaultOptions = require('./defaultOptions');
const compileTemplates = require('./compileTemplates');
const loadTemplates = require('./loadTemplates');

module.exports = function configure(options) {
    const defaults = defaultOptions();
    const result = {};

    _.merge(result, options, defaults);

    logger.info('Loaded Configuration');
    logger.debug('Initial Configuration: ' + JSON.stringify(result));

    const templateStrings = loadTemplates(result.templateLocations);
    logger.info('Loaded Template Strings');

    _.merge(result.templates, templateStrings);
    _.merge(result.templates, compileTemplates(templateStrings));
    logger.info('Compiled Template Strings');

    return result;
};