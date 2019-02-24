---
title: About Themes
---

# About Themes

A theme controls how markdown files are rendered into HTML. A theme gives you fine grained control of the output via [templates](./templates.md), and lets you include additional files such as styles and scripts.

## Creating a Theme

Its best to keep your theme files together in a single directory. A theme directory might look something like this:

```text
./page.tpl.html
./heading.tpl.html
./index.js
./index.css
./table.tpl.html
./paragraph.tpl.html
```

The index.js file is a node module script that exports a partial configuration file. For example:

```javascript
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
```

The theme configuration can be easily mixed in with the configuration object passed to markdown generator

```javascript
const environment = require('./environment');

const theme = require('./theme');

markdownGenerator({
    inputLocation: environment.repository.documentation,
    outputLocation: environment.output.docs,
    title: 'Markdown Generator',
    ...theme,
});
```

The ``templateLocations`` object configures the specific templates your theme defines. These templates override the default ones used to generate HTML. Its also possible 

The ``themeFiles`` array contains a list of files you would like to include in the output. These files will be output to the ``./theme`` directory in the output. 

## Templates

Templates are compiled into [lodash templates](https://lodash.com/docs/4.17.11#template). Use <%= variable %> or <%- variable %> to output the contents of template variables.

* [Page Template](./00-page-template.md)
* [HTML Templates](./01-html-templates.md)


