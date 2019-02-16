const logger = require('log4js').getLogger('main');
const path = require('path');
const fs = require('fs-extra');
const walkTree = require('./walkTree');


module.exports = function outputFiles(outputLocation, tree, themeFiles) {
    fs.ensureDirSync(outputLocation);

    walkTree(tree, node => {
        if(node.type === 'directory') {
            fs.ensureDirSync(node.outputLocation);
            logger.debug(`Output (Directory) - ${node.outputLocation}`);
        } else if(node.isMarkdown) {
            fs.writeFileSync(node.outputLocation, node.output);
            logger.debug(`Output (Markdown ) - ${node.outputLocation}`);
        } else {
            fs.copySync(node.path, node.outputLocation);
            logger.debug(`Output (Other    ) - ${node.outputLocation}`);
        }
    });

    themeFiles.forEach(themeFile => {
        console.log(themeFile);
        fs.copySync(themeFile.inputLocation, themeFile.outputLocation);
    });
};