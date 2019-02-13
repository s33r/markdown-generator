const walkTree = require('./walkTree');

module.exports = function outputFiles(tree, template, title, searchIndex) {
    walkTree(tree, node => {
        if(node.isMarkdown) {
            node.output = template({
                node,
                title,
                searchIndex,
            });
        }
    });
};