const dirTree = require('directory-tree');
const walkTree = require('../walkTree');

const processNode = require('./processNode');

module.exports = function createFileMap(inputLocation, outputLocation) {
    const tree = dirTree(inputLocation);

    walkTree(tree, node => processNode(node, inputLocation, outputLocation));

    return tree;
};