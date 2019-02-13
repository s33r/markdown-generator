const path = require('path');
const fs = require('fs-extra');
const lodash = require('lodash');

const createFileMap = require('./createFileMap');
const outputFiles = require('./outputFiles');
const createNavigation = require('./createNavigation');
const renderHtmlFile = require('./renderHtmlFile');
const createSearchIndex = require('./createSearchIndex');

const defaults = {
    inputLocation: path.resolve(__dirname, '../documentation'),
    outputLocation: path.resolve(__dirname, '../deploy/docs'),
    templateLocation: path.resolve(__dirname, './templates/index.html'),
    dryrun: false,
    enableSearch: true,
    title: 'Default Documentation',
};

module.exports = function buildDocs(options) {
    const config = {};

    Object.assign(config, defaults);
    Object.assign(config, options);

    config.template = lodash.template(fs.readFileSync(config.templateLocation));

    const fileMap = createFileMap(config.inputLocation, config.outputLocation);
    createNavigation(fileMap);

    const searchIndex = createSearchIndex(fileMap);

    renderHtmlFile(fileMap, config.template, config.title, searchIndex);

    if(!config.dryrun) {
        outputFiles(config.outputLocation, fileMap);
    }

    return fileMap;
};