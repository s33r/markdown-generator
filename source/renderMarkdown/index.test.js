const renderMarkdownFile = require('./index');

test('returns null if fileLocation is not set', () => {
    expect(renderMarkdownFile()).toBe(null);
});