const renderMarkdownFile = require('./renderMarkdownFile');

test('returns null if fileLocation is not set', () => {
    expect(renderMarkdownFile()).toBe(null);
});