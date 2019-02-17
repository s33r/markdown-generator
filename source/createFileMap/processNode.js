const path = require('path');

const renderMarkdown = require('../renderMarkdown');
const util = require('../util');

let currentId = 0;

module.exports = function processNode(node, configuration) {
    node.isMarkdown = node.type === 'file' && node.extension === '.md';
    node.id = currentId++;

    if(node.isMarkdown) {
        const data = renderMarkdown(node.path, configuration.templates);

        node.raw = data.raw;
        node.meta = data.meta || {};
        node.data = data.content;

        node.meta.title = node.meta.title || util.getTitle(node);
    }

    node.pathRoot = path.relative(configuration.inputLocation, node.path);

    node.outputLocation = path.resolve(configuration.outputLocation, node.pathRoot);


    if(node.isMarkdown) {
        node.outputLocation = node.outputLocation.replace(util.MD_REGEX, '.html');
        node.themeLocation = './' + path.relative(path.dirname(node.outputLocation), configuration.themeOutputLocation);
    }
};