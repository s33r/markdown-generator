const fs = require('fs-extra');
const walkTree = require('./walkTree');


module.exports = function outputFiles(outputLocation, tree) {
    fs.ensureDirSync(outputLocation);

    walkTree(tree, node => {
        if(node.type === 'directory') {
            fs.ensureDirSync(node.outputLocation);
        } else if(node.isMarkdown) {
            fs.writeFileSync(node.outputLocation, node.output);
        } else {
            fs.copySync(node.path, node.outputLocation);
        }
    });
};