const processDirectory = require('./processDirectory');

test('creates a link', () => {
    const fileLinkIndex = {};
    const node = {
        id: 7,
        name: 'deep',
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

    expect(processDirectory(current, node, fileLinkIndex))
        .toBe('<li><a href="test/deep/index.html">deep</a>\n<ol>\n');
});

test('creates bold for current location', () => {
    const fileLinkIndex = {};
    const node = {
        id: 7,
        name: 'deep',
        outputLocation: '/test/deep',
        meta: {
            title: 'Node Title',
        },
    };

    const current = {
        id: 7,
        name: 'deep',
        outputLocation: '/test/deep/nested',
        meta: {
            title: 'Node Title',
        },
    };

    expect(processDirectory(current, node, fileLinkIndex))
        .toBe('<li><b><a href="./index.html">deep</a></b>\n<ol>\n');
});

test('populates fileLinkIndex', () => {
    const fileLinkIndex = {};
    const node = {
        id: 7,
        name: 'deep',
        outputLocation: '/test/deep',
        meta: {
            title: 'Node Title',
        },
        children: [
            {
                id: 20,
                name: 'index.md',
                meta: {
                    title: 'Test Index',
                },
            },
        ],
    };

    const current = {
        id: 8,
        name: 'other.md',
        outputLocation: '/test',
        meta: {
            title: 'Current Title',
        },
    };

    processDirectory(current, node, fileLinkIndex);

    expect(fileLinkIndex[20].title).toBe('Test Index');
});

test('doesn\'t populate fileLinkIndex' , () => {
    const fileLinkIndex = {};
    const node = {
        id: 7,
        name: 'deep',
        outputLocation: '/test/deep',
        meta: {
            title: 'Node Title',
        },
        children: [],
    };

    const current = {
        id: 7,
        name: 'deep',
        outputLocation: '/test/deep/nested',
        meta: {
            title: 'Node Title',
        },
    };

    expect(processDirectory(current, node, fileLinkIndex))
        .toBe('<li><b><a href="./index.html">deep</a></b>\n<ol>\n');
});