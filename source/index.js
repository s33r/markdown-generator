const log4js = require('log4js');

const createFileMap = require('./createFileMap');
const outputFiles = require('./outputFiles');
const createNavigation = require('./createNavigation');
const renderHtmlFile = require('./renderHtmlFile');
const createSearchIndex = require('./createSearchIndex');

const setup = require('./setup');

log4js.configure({
    appenders: {
        main: { type: 'stdout' },
    },
    categories: {
        default: { appenders: [ 'main' ], level: 'debug' }
    }
});

const logger = log4js.getLogger('main');

module.exports = function buildDocs(options) {
    const configuration = setup(options);

    logger.info(`Loaded Configuration`);
    logger.info(`Starting Translation: ${options.inputLocation} -> ${options.outputLocation}`);
    logger.info(`Page Template: ${configuration.templateLocations.page}`);


    const fileMap = createFileMap(configuration);
    logger.info('Created File Map');
    createNavigation(fileMap);
    logger.info('Created Navigation');

    const searchIndex = createSearchIndex(fileMap);
    logger.info('Created Search Index');

    renderHtmlFile(fileMap, configuration.templates.page, configuration.title, searchIndex);
    logger.info('Rendered HTML');

    if(!configuration.dryrun) {
        outputFiles(configuration.outputLocation, configuration.themeOutputLocation, fileMap, configuration.themeFiles);
        logger.info('Created HTML Files');
    } else {
        logger.info('dryrun=true, Skipping HTML file output');
    }

    return fileMap;
};