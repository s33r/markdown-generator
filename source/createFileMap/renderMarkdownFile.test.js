const fs = require('fs');
const marked = require('marked');
const yamlFront = require('yaml-front-matter');

const renderMarkdownFile = require('./renderMarkdownFile');


jest.mock('fs');
jest.mock('yamlFront');
jest.mock('marked');

const rawMarkdown = 'Raw';
const renderedHTML = 'Rendered HTML';

fs.readFileSync.mockImplementation(() => rawMarkdown);
yamlFront.loadFront.mockImplementation(() => ({
    test: true
}));
marked.mockImplementation(() => renderedHTML);


test('returns null if fileLocation is not set', () => {
    expect(renderMarkdownFile()).toBe(null);
});

test('valid file data', () => {

    const result = renderMarkdownFile('./test/example.md');

    expect(result.raw).toBe(rawMarkdown);
    expect(result.content).toBe(renderedHTML);
    expect(result.meta.test).toBe(true);
});
