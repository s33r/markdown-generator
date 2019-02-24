[![Build Status](https://travis-ci.org/s33r/markdown-generator.svg?branch=master)](https://travis-ci.org/s33r/markdown-generator)

------------------------------------------------------------------------------------------------------------------------

Creates a static site from markdown files.

>This software is still in development and is not production ready.

[Github Repository](https://github.com/s33r/markdown-generator)

## Installation

```shell
npm install @aaron-cw/markdown-generator --save-dev
```

## Usage

Note: _Use absolute paths for all configuration options._

Usage:
```javascript
const markdownGenerator = require('@aaron-cw/markdown-generator');

const configuration = {
    
    // The directory of markdown files to build
    inputLocation: path.resolve(__dirname, '../documentation'),
    
    // The directory where the resulting html files will be output.
    outputLocation: path.resolve(__dirname, '../deploy/docs'),
    
    // The title to use for the static site.
    title: 'Default Documentation',    
};

markdownGenerator(configuration);

```

The full set of options is detailed [here](./options.md).

## Markdown Format
markdown generator uses [GitHub Flavored Markdown](https://github.github.com/gfm/) and is parsed with [marked](https://github.com/markedjs/marked). 

A cheatsheet is available: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet]

There is one non-standard extension to markdown. Markdown Generator has the ability to inclde code files inline. 

To do so:

```markdown
`````javascript?./inline-example.js

``````
```

And it renders as:
```javascript?./inline-example.js

```