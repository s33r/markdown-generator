const dirTree = require('directory-tree');
const walkTree = require('./walkTree');
const renderMarkdownFile = require('./renderMarkdownFile');
const path = require('path');
const util = require('./util');

module.exports = function createFileMap(inputLocation, outputLocation) {
    let currentId = 0;
    const tree = dirTree(inputLocation);


    walkTree(tree, node => {
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
    });

    return tree;
};