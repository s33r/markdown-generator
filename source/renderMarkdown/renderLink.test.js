const renderLink = require('./renderLink');

test('markdown links are switched to html', () => {
    const href = './test/markdown/example.md';
    const title = 'Test Title';
    const text = 'Example';

    expect(renderLink((href) => href ,href, title, text)).toBe('./test/markdown/example.html');
});

