const util = require('./util');

test('MD_REGEX to be defined', () => {
    expect(util.MD_REGEX).toBeDefined();
});

test('NUMBER_PREFIX_REGEX to be defined', () => {
    expect(util.NUMBER_PREFIX_REGEX).toBeDefined();
});

test('getTitle to be defined', () => {
    expect(util.getTitle).toBeDefined();
});

test('title not to include extension', () => {
    const node = {
        name: 'test.md',
    };

    expect(util.getTitle(node)).toBe('Test');
});

test('title not to be correctly spaced and capitalized', () => {
    const node = {
        name: 'test-file.md',
    };

    expect(util.getTitle(node)).toBe('Test File');
});

test('title not to include numbers', () => {
    const node = {
        name: '00-test.md',
    };

    expect(util.getTitle(node)).toBe('Test');
});

test('title to be set from path', () => {
    const node = {
        name: 'nested/files/index.md',
        path:'nested/files/index.md',
    };

    expect(util.getTitle(node)).toBe('Files');
});