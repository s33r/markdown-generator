module.exports = function verifyConfiguration(configuration) {
    if(!configuration.templates.page) {
        throw new Error('Missing page template, you must set the page template.');
    }

    if(!configuration.inputLocation) {
        throw new Error('Missing input location, the inputLocation must be a valid directory.');
    }

    if(!configuration.outputLocation) {
        throw new Error('Missing output location, the outputLocation must be a directory.');
    }
};