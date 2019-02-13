const util = require('../util');

module.exports = function renderLink(href, title, text) {
    const newHref = !!href ? href.replace(util.MD_REGEX, '.html') : null;

    const hrefAttribute = !!href ? ` href="${newHref}"` : '';
    const titleAttribute = !!title ? ` title="${title}"` : '';

    return `<a${hrefAttribute}${titleAttribute}>${text}</a>`;
};