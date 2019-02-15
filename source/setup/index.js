const configure = require('./configure');
const verifyConfiguration = require('./verifyConfiguration');

module.exports = function setup(options) {
    const configuration = configure(options);

    verifyConfiguration(configuration);

    return configuration;
};