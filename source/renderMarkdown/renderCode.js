const path = require('path');
const fs = require('fs-extra');

module.exports = function renderCode(originalCodeRender, code, language, escaped) {
    const parts = language.split('?');

    const actualLanguage = parts[0];
    let actualCode = code;

    if(parts.length > 1) {
        const fullPath = path.resolve(path.dirname(this.options.fileLocation), parts[1]);

        actualCode = fs.readFileSync(fullPath, {
            encoding: 'utf8',
        });
    }

    return originalCodeRender.call(this, actualCode, actualLanguage, escaped);
};