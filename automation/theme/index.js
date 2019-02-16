const path = require('path');

module.exports = {
    templateLocations: {
        page: path.resolve(__dirname, './page.tpl.html'),
        table: path.resolve(__dirname, './table.tpl.html'),
    }
};