const path = require('path');

module.exports = () => ({

    // The directory from which to load markdown files.
    inputLocation: path.resolve(__dirname, '../../documentation'),

    // The directory to output html files
    outputLocation: path.resolve(__dirname, '../../deploy/docs'),

    // If true, do not output any files.
    dryrun: false,

    title: 'Default Documentation',

    templates: {

    },

    templateLocations: {
        page: path.resolve(__dirname, '../templates/page.tpl.html'),
    },
});