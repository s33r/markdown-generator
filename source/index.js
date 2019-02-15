const createFileMap = require('./createFileMap');
const outputFiles = require('./outputFiles');
const createNavigation = require('./createNavigation');
const renderHtmlFile = require('./renderHtmlFile');
const createSearchIndex = require('./createSearchIndex');

const setup = require('./setup');

module.exports = function buildDocs(options) {
    const configuration = setup(options);

    const fileMap = createFileMap(configuration);
    createNavigation(fileMap);

    const searchIndex = createSearchIndex(fileMap);

    renderHtmlFile(fileMap, configuration.templates.page, configuration.title, searchIndex);

    if(!configuration.dryrun) {
        outputFiles(configuration.outputLocation, fileMap);
    }

    return fileMap;
};