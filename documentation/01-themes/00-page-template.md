---
title: Page Templates
---

# Page Templates

The page template defines the basic html page. Its the last template to be rendered

The template has access to the following variables:

| Variable           | Description
|--------------------|------------------------------------------------------------------------------------------------------------
| generator          | The value to put in the meta generator element.
| title              | The site's title.
| searchIndex        | The JavaScript object that contains the compiled search index.
| node               | The node contains information about the specific markdown file. See below for more information.
| node.id            | The file id. Used to create the search index and map search results.
| node.data          | The rendered HTML
| node.meta          | An object that contains meta information about the current document. This object id populated from the markdown documents YAML front matter.
| node.meta.title    | The title of the current document.
| node.themeLocation | The relative path to the theme folder.
| node.navigation    | Generated HTML that contains the a navigation menu for the site.
| node.fileLinkIndex | An object that maps search results to specific documents.