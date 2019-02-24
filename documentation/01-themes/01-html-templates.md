---
title: HTML Templates
---

# HTML Templates

## templates.code

Template used when rendering code blocks. 

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| code     | The text for this code block
| lang     | The programming language. Useful for syntax highlighters.
| escaped  |

## templates.blockquote

The template used to render blockquotes.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| text     | The text of the block quote

## templates.html

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| html     | 

## templates.heading

The template used to render headings. Note: if the title is used as h1, so each level should be incremented by 1

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| text     | The text of the heading
| level    | The level of the heading. Like HTML, the highest level is 1.
| raw      |
| slugger  | A function that can transform the heading text to a valid id. ``slugger.slug(text)``

## templates.hr

The template used to render horizontal rules.

There are no variables available to this template.

## templates.list

The template used to render lists. This is the container, the template for individual list items is detailed below.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| body     | The html body of the list.
| ordered  | If true, order is important for this list.
| start    |

## templates.listitem

The template used to render individual entries in a list.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| text     | The text of this list item


## templates.checkbox

The template used to render a checkbox (usually, not interactive).

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| checked  | If true, the box is checked.

## templates.paragraph

The template used to render paragraphs.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| text     | The text if the paragraph.

## templates.table

The template used to render a table. This is the template for the tables outer elements, the templates for individual rows and columns are specified below.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| header   | The header content for the table.
| body     | the body content for the table.

## templates.tablerow

The template used to render a single table row.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| content  | The row's content

## templates.tablecell

The template used to render an individual cell of a table.

The template has access to the following variables:

| Variable     | Description
|--------------|------------------------------------------------------------------------------------------------------------
| content      | The content of this cell.
| flags        | Object with flags that control how to render a table cell.
| flags.header | If true, this cell is a header cell.
| flags.align  | Controls the text alignment of this cell. Will be one of: center, left, or right.

## templates.strong

The template used to render strong text.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| text     | The text to render.

## templates.em

The template used to render emphasized text.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| text     | The text to render.

## templates.codespan

The template used to render code inline.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| code     | The code to render.

## templates.br

The template used to render line breaks.

The template has no variables.

## templates.del

The template used to render deleted (strikethrough) text.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| text     | The text to render.

## templates.link

The template used to render anchor links.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| href     | This link's URL. _Note: Links that end with .md will be transformed to end with .html_.
| title    | The title attribute for this link.
| text     | The text for this link.

## templates.image

The template used to render deleted (strikethrough) text.

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| href     | This image's source URL.
| title    | The title attribute for this link.
| text     | The alt text for this image.

## templates.del

The template has access to the following variables:

| Variable | Description
|----------|------------------------------------------------------------------------------------------------------------
| text     | The text to render.


