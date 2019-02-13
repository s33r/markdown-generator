# Markdown Generator

Creates a static site from markdown files.

[Github Repository](https://github.com/s33r/markdown-generator)

## Installation

```shell
npm install markdown-generator --save-dev
```


## API Usage

```javascript
const markdownGenerator = require('markdown-generator');

markdownGenerator();

```

## Configuration Options

Usage:
```javascript
const markdownGenerator = require('markdown-generator');

const configuration = {
    
    // The directory where the generator will search for markdown files.
    inputLocation: path.resolve(__dirname, '../documentation'),
    
    // The directory where html will be output.
    outputLocation: path.resolve(__dirname, '../deploy/docs'),
    
    // The file to use as the template for rendering html
    templateLocation: path.resolve(__dirname, './templates/index.html'),
    
    // If true, do not output any files.
    dryrun: false,
    
    // If true, search will be enabled. If search is disabled, you may want to remove it from the default template.
    enableSearch: true,
    
    // The title to use for the static site.
    title: 'Default Documentation',    
};

markdownGenerator(configuration);

```

## Markdown Format
markdown generator uses [GitHub Flavored Markdown](https://github.github.com/gfm/) and is parsed with [marked](https://github.com/markedjs/marked). 

A cheatsheet is available: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet]

There is one non-standard extension to markdown. Markdown Generator has the ability to inclde code files inline. 

To do so:

```markdown
```javascript?./inline-example.js

\```
```

And it renders as:
```javascript?./inline-example.js

```