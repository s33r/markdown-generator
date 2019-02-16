const logger = require('log4js').getLogger('main');

const walkTree = require('./walkTree');
const nodePackage = require('../package');

const generator = `${nodePackage.name} v(${nodePackage.version})`;

module.exports = function outputFiles(tree, template, title, searchIndex) {
    walkTree(tree, node => {
        if(node.isMarkdown) {
            logger.debug(`Rendering HTML - ${node.outputLocation}`);
            node.output = template({
                generator,
                node,
                title,
                searchIndex,
            });
        }
    });
};