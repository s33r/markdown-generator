const path = require('path');

module.exports = function mapThemeFiles(configuration) {
    return configuration.themeFiles.map(inputLocation => ({
        inputLocation,
        outputLocation: path.join(configuration.outputLocation, path.basename(inputLocation)),
    }));
};