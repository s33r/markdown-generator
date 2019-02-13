const path = require('path');
const _ = require('lodash');

module.exports.MD_REGEX = /\.md$/;
module.exports.NUMBER_PREFIX_REGEX = /^\d+-/;

module.exports.getTitle = function(node) {
    let title = node.name;

    if(node.name.includes('index.md')) {
        title = path.dirname(node.path);
        title = path.basename(title);
    } else {
        title = path.basename(node.name, '.md')
    }

    title = title.replace(module.exports.NUMBER_PREFIX_REGEX, '');
    title = _.startCase(title);

    return title;
};