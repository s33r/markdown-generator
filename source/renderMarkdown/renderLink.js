const util = require('../util');

module.exports = function renderLink(originalLinkRenderer, href, title, text) {
    const newHref = href ? href.replace(util.MD_REGEX, '.html') : null;

    return originalLinkRenderer.call(this, newHref, title, text);
};