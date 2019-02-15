const walkTree = require('./walkTree');
const nodePackage = require('../package');

const generator = `${nodePackage.name} v(${nodePackage.version})`;

module.exports = function outputFiles(tree, template, title, searchIndex) {
    walkTree(tree, node => {
        if(node.isMarkdown) {
            node.output = template({
                generator,
                node,
                title,
                searchIndex,
            });
        }
    });
};