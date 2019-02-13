const lunr = require('lunr');
const path = require('path');

const walkTree = require('./walkTree');
const util = require('./util');

module.exports = function createSearchIndex(tree) {
    const searchObjects = [];

    walkTree(tree, node => {
        if(node.isMarkdown) {
            searchObjects.push({
                id: node.id,
                content: node.data,
                title: node.meta.title,
            });

        }
    });

    const searchIndex = lunr(function () {
        this.ref('id');
        this.field('content');
        this.field('title');

        searchObjects.forEach(function (searchObject) {
            this.add(searchObject);
        }, this);

    });

    return JSON.stringify(searchIndex);
};