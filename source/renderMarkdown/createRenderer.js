const marked = require('marked');
const _ = require('lodash');

const rendererMethods = {
    'code' : ['code', 'lang', 'escaped'], //TODO: ACW marked calles lang infostring. whats the deal with that?
    'blockquote': ['text'], //NOTE: ACW marked calls the arg 'quote' but text is used everywhere else.
    'html': ['html'],
    'heading': ['text', 'level', 'raw', 'slugger'],
    'hr': [],
    'list' :['body', 'ordered', 'start'],
    'listitem': ['text'],
    'checkbox' : ['checked'],
    'paragraph' : ['text'],
    'table': ['header', 'body'],
    'tablerow': ['content'],
    'tablecell': ['content', 'flags'],
    'strong': ['text'],
    'em': ['text'],
    'codespan': ['code'],
    'br': [],
    'del': ['text'],
    'link': ['href', 'title', 'text'],
    'image': ['href', 'title', 'text'],
    'text': ['text'],
};

module.exports = function createRenderer(templates) {
    const renderer = new marked.Renderer();

    Object.keys(rendererMethods).forEach(method => {
         if(templates[method]) {
             renderer[method] = function(...args) {
                 //TODO: ACW Replace with fromEntries
                 const data = _.fromPairs(args.map((arg, index) => [rendererMethods[method][index], arg]));

                 return templates[method](data);
             }
         }
    });

    return renderer;
};