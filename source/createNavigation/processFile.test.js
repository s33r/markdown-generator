const processFile = require('./processFile');

test('creates a link', () => {
    const fileLinkIndex = {};
    const node = {
        id: 7,
        name: 'test.md',
        outputLocation: '/test/deep',
        meta: {
            title: 'Node Title',
        },
    };

    const current = {
        id: 8,
        name: 'other.md',
        outputLocation: '/test',
        meta: {
            title: 'Current Title',
        },
    };

    expect(processFile(current, node, fileLinkIndex))
        .toBe(`<li><a href="test/test.html">${node.meta.title}</a></li>\n`);
});

test('creates bold for current location', () => {
    const fileLinkIndex = {};
    const node = {
        id: 7,
        name: 'test.md',
        outputLocation: '/test/deep',
        meta: {
            title: 'Node Title',
        },
    };

    expect(processFile(node, node, fileLinkIndex))
        .toBe(`<li><b>${node.meta.title}</b></li>\n`);
});