const path = require('path');

const walkTree = require('./walkTree');
const util = require('./util');

module.exports = function createNavigation(tree) {
    walkTree(tree, current => {
        let result = '<ol>';
        const fileLinkIndex = {};

        walkTree(tree, node => {
            if(node.type === 'directory') {
                const currentLocation = path.dirname(current.outputLocation);
                const nodeLocation = node.outputLocation;
                const sameLocation = currentLocation === nodeLocation;

                const prefix = path.relative(currentLocation, nodeLocation)
                    ? path.relative(currentLocation, nodeLocation)
                    : '.';

                const href = `${prefix}/index.html`;
                let text = node.name;

                if(node.children) {
                    const indexNode = node.children.filter(child => child.name.includes('index.md'));
                    if (indexNode && indexNode[0]) {
                        text = indexNode[0].meta.title;

                        fileLinkIndex[indexNode[0].id] = {
                            href,
                            id: indexNode[0].id,
                            title: text,
                        };
                    }
                }

                if(sameLocation) {
                    result += `<li><b><a href="${href}">${text}</a></b>\n<ol>\n`;
                } else {
                    result += `<li><a href="${href}">${text}</a>\n<ol>\n`;
                }

            } else if(node.isMarkdown && !node.name.includes('index.md')) {
                const currentLocation = path.dirname(current.outputLocation);
                const nodeLocation = path.dirname(node.outputLocation);
                const sameLocation = current.outputLocation === node.outputLocation;

                const prefix = path.relative(currentLocation, nodeLocation)
                    ? path.relative(currentLocation, nodeLocation)
                    : '.';

                const href =`${prefix}/${node.name.replace(util.MD_REGEX, '.html')}`;
                const text = node.meta.title || getTitle(node.name);


                if(sameLocation) {
                    result += `<li><b>${text}</b></li>\n`;
                } else {
                    result += `<li><a href="${href}">${text}</a></li>\n`;
                }

                fileLinkIndex[node.id] = {
                    href,
                    id: node.id,
                    title: text,
                };
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