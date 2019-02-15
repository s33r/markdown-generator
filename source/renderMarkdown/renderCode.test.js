const fs = require('fs');
const renderCode = require('./renderCode');

jest.mock('fs');

const referencedTestCode = 'Referenced Test Code';
fs.readFileSync.mockImplementation(() => referencedTestCode);

const mockOriginalCodeRender = function(code) {
    return code;
};


test('loads referenced file', () => {
    const code = 'Test Code';
    const language = 'javascript?./example.js';
    const mockThis = {
        options : {
            fileLocation: './test/example.md'
        }
    };

    expect(renderCode.call(mockThis, mockOriginalCodeRender, code, language)).toBe(referencedTestCode);
});

test('renders code', () => {
    const code = 'Test Code';
    const language = 'javascript';
    const mockThis = {
        options : {
            fileLocation: './test/example.md'
        }
    };

    expect(renderCode.call(mockThis, mockOriginalCodeRender, code, language)).toBe(code);
});
