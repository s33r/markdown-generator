const walkTree = require('../walkTree');

const processDirectory = require('./processDirectory');
const processFile = require('./processFile');

module.exports = function createNavigation(tree) {
    walkTree(tree, current => {
        let result = '<ol>';
        const fileLinkIndex = {};

        walkTree(tree, node => {
            if(node.type === 'directory') {
                result += processDirectory(current, node, fileLinkIndex);
            } else if(node.isMarkdown && !node.name.includes('index.md')) {
                result += processFile(current, node, fileLinkIndex);
            }
        }, node => {
            if(node.type === 'directory') {
                result += `</ol>\n</li>`;
            }
        });

        result += '</ol>';

        current.navigation = result;
        current.fileLinkIndex = JSON.stringify(fileLinkIndex);
    });
};