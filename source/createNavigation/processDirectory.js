const path = require('path');

module.exports = function processDirectory(current, node, fileLinkIndex) {
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
        return `<li><b><a href="${href}">${text}</a></b>\n<ol>\n`;
    } else {
        return `<li><a href="${href}">${text}</a>\n<ol>\n`;
    }
};