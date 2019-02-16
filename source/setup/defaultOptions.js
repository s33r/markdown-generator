const path = require('path');

module.exports = () => ({
    // If true, do not output any files.
    dryrun: false,

    title: 'Default Documentation',

    templates: {

    },

    templateLocations: {
        page: path.resolve(__dirname, '../templates/page.tpl.html'),
    },
});