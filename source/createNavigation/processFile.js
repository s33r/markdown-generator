const path = require('path');
const util = require('../util');

module.exports = function processFile(current, node, fileLinkIndex) {
    const currentLocation = path.dirname(current.outputLocation);
    const nodeLocation = path.dirname(node.outputLocation);
    const sameLocation = current.outputLocation === node.outputLocation;

    const prefix = path.relative(currentLocation, nodeLocation)
        ? path.relative(currentLocation, nodeLocation)
        : '.';

    const href =`${prefix}/${node.name.replace(util.MD_REGEX, '.html')}`;
    const text = node.meta.title || getTitle(node.name);

    fileLinkIndex[node.id] = {
        href,
        id: node.id,
        title: text,
    };

    if(sameLocation) {
        return `<li><b>${text}</b></li>\n`;
    } else {
        return `<li><a href="${href}">${text}</a></li>\n`;
    }
};