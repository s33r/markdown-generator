const yamlFront = require('yaml-front-matter');
const marked = require('marked');
const renderer = new marked.Renderer();
const fs = require('fs-extra');
const util = require('./util');
const path = require('path');


renderer.link = function(href, title, text) {
    const newHref = href.replace(util.MD_REGEX, '.html');

    const hrefAttribute = !!href ? ` href="${newHref}"` : '';
    const titleAttribute = !!title ? ` title="${title}"` : '';

    return `<a${hrefAttribute}${titleAttribute}>${text}</a>`;
};

const originalCode = renderer.code;

renderer.code = function(code, language, escaped) {
    const parts = language.split('?');

    const actualLanguage = parts[0];
    let actualCode = code;

    if(parts.length > 1) {
        const fullPath = path.resolve(path.dirname(this.options.fileLocation), parts[1]);
        actualCode = fs.readFileSync(fullPath, {encoding: 'utf8'});
        console.log(actualCode);
    }

    return originalCode.call(this, actualCode, actualLanguage, escaped);
};

module.exports = function renderMarkdownFile(fileLocation) {
    if(!fileLocation) {
        return null;
    }

    const raw = fs.readFileSync(fileLocation, {encoding: 'utf8'});
    const meta = yamlFront.loadFront(raw);
    const content = marked(meta.__content, {
        fileLocation,
        renderer
    });

    return {
        raw,
        meta,
        content,
    };
};