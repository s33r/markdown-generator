const path = require('path');

const renderMarkdownFile = require('./renderMarkdownFile');
const util = require('../util');

let currentId = 0;

module.exports = function processNode(node, inputLocation, outputLocation) {
    node.isMarkdown = node.type === 'file' && node.extension === '.md';
    node.id = currentId++;

    if(node.isMarkdown) {
        const data = renderMarkdownFile(node.path);

        node.raw = data.raw;
        node.meta = data.meta || {};
        node.data = data.content;

        node.meta.title = node.meta.title || util.getTitle(node);
    }

    node.pathRoot = path.relative(inputLocation, node.path);

    node.outputLocation = path.resolve(outputLocation, node.pathRoot);

    if(node.isMarkdown) {
        node.outputLocation = node.outputLocation.replace(util.MD_REGEX, '.html');
    }
};