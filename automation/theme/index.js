const path = require('path');

module.exports = {
    templateLocations: {
        page: path.resolve(__dirname, './page.tpl.html'),
        table: path.resolve(__dirname, './table.tpl.html'),
        paragraph: path.resolve(__dirname, './paragraph.tpl.html'),
        heading: path.resolve(__dirname, './heading.tpl.html'),
    },
    themeFiles: [
        path.resolve(__dirname, './index.css'),
        path.resolve(__dirname, '../../node_modules/normalize.css/normalize.css'),
    ]
};