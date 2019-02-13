const processNode = require('./processNode');
const renderMarkdownFile = require('./renderMarkdownFile');

jest.mock('./renderMarkdownFile');

renderMarkdownFile.mockImplementation(() => ({
    raw: 'raw',
    meta: { test: true},
    content: 'data',
}));

const inputLocation = '/test';
const outputLocation = '/deploy';

test('markdown node should be correctly flagged', () => {
    const node = {
        extension: '.md',
        type: 'file',
        name: 'example.md',
        path: '/test/markdown/example.md',
    };

    processNode(node, inputLocation, outputLocation);

    expect(node.isMarkdown).toBeTruthy();
});

test('non-markdown node should be correctly flagged', () => {
    const node = {
        extension: '.txt',
        type: 'file',
        name: 'example.txt',
        path: '/test/markdown/example.txt',
    };

    processNode(node, inputLocation, outputLocation);

    expect(node.isMarkdown).toBeFalsy();
});

test('node should have correct id', () => {
    const node = {
        extension: '.md',
        type: 'file',
        name: 'example.md',
        path: '/test/markdown/example.md',
    };

    processNode(node, inputLocation, outputLocation);

    expect(node.id).toBe(2);
});

test('node should have set data fields', () => {
    const node = {
        extension: '.md',
        type: 'file',
        name: 'example.md',
        path: '/test/markdown/example.md',
    };

    processNode(node, inputLocation, outputLocation);

    expect(node.raw).toStrictEqual('raw');
    expect(node.data).toStrictEqual('data');
    expect(node.meta.test).toBe(true);
});

test('node should have set title', () => {
    const node = {
        extension: '.md',
        type: 'file',
        name: 'example.md',
        path: '/test/markdown/example.md',
    };

    processNode(node, inputLocation, outputLocation);

    expect(node.meta.title).toStrictEqual('Example');
});