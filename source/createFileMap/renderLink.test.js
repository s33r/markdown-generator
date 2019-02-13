const renderLink = require('./renderLink');

test('markdown links are switched to html', () => {
    const href = './test/markdown/example.md';
    const title = 'Test Title';
    const text = "Example";

    expect(renderLink(href, title, text)).toBe('<a href="./test/markdown/example.html" title="Test Title">Example</a>');
});

test('other links are not switched to html', () => {
    const href = './test/markdown/example.txt';
    const title = 'Test Title';
    const text = "Example";

    expect(renderLink(href, title, text)).toBe('<a href="./test/markdown/example.txt" title="Test Title">Example</a>');
});

test('doest not render missing hrefs', () => {
    const title = 'Test Title';
    const text = "Example";

    expect(renderLink(null, title, text)).toBe('<a title="Test Title">Example</a>');
});

test('doest not render missing hrefs', () => {
    const href = './test/markdown/example.txt';
    const title = 'Test Title';
    const text = "Example";

    expect(renderLink(href, null, text)).toBe('<a href="./test/markdown/example.txt">Example</a>');
});