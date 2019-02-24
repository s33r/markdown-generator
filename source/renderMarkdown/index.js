const yamlFront = require('yaml-front-matter');
const marked = require('marked');
const fs = require('fs-extra');

const renderLink = require('./renderLink');
const renderCode = require('./renderCode');
const createRenderer = require('./createRenderer');



const initializeOldRenderer = function(renderer) {
    const originalLinkRenderer = renderer.link;
    const originalCodeRender = renderer.code;

    renderer.link = function(href, title, text) {
        return renderLink.call(this, originalLinkRenderer, href, title, text);
    };

    renderer.code = function(code, language, escaped) {
        return renderCode.call(this, originalCodeRender, code, language, escaped);
    };

    return renderer;
};

module.exports = function renderMarkdownFile(fileLocation, templates) {
    if(!fileLocation) {
        return null;
    }

    const renderer = createRenderer(templates);
    initializeOldRenderer(renderer);

    const raw = fs.readFileSync(fileLocation, {
        encoding: 'utf8',
    });
    const meta = yamlFront.loadFront(raw);
    const content = marked(meta.__content, {
        fileLocation,
        renderer,
    });

    return {
        raw,
        meta,
        content,
    };
};