const dirTree = require('directory-tree');
const walkTree = require('../walkTree');

const processNode = require('./processNode');

module.exports = function createFileMap(configuration) {
    const tree = dirTree(configuration.inputLocation);

    walkTree(tree, node => processNode(node, configuration));

    return tree;
};