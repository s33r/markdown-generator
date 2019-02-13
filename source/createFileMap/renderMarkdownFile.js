const yamlFront = require('yaml-front-matter');
const marked = require('marked');
const fs = require('fs-extra');

const renderLink = require('./renderLink');
const renderCode = require('./renderCode');

const renderer = new marked.Renderer();

renderer.link = renderLink;

const originalCodeRender = renderer.code;

renderer.code = function(code, language, escaped) {
    return renderCode.call(this, originalCodeRender, code, language, escaped);
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