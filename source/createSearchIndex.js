const logger = require('log4js').getLogger('main');

const lunr = require('lunr');

const walkTree = require('./walkTree');

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
            logger.debug(`Search Entry - (${searchObject.id}:${searchObject.title})`);
        }, this);

    });

    return JSON.stringify(searchIndex);
};