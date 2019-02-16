const logger = require('log4js').getLogger('main');

module.exports = function verifyConfiguration(configuration) {
    if(!configuration.templates.page) {
        logger.fatal('Missing page template, you must set the page template.');
    }

    if(!configuration.inputLocation) {
        logger.fatal('Missing input location, the inputLocation must be a valid directory.')

    }

    if(!configuration.outputLocation) {
        logger.fatal('Missing output location, the outputLocation must be a directory.');
    }
};