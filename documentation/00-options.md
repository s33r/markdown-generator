---
title: Configuration Options
---

# Configuration Options

| Option         | Default               | Description
|----------------|-----------------------|------------------
| inputLocation  | N/A                   | The directory where the markdown files are located.
| outputLocation | N/A                   | The directory where the static site will be output.
| title          | Default Documentation | The title of the site.
| dryrun         | false                 | If true, render the files, but do not write them to disk.
| templates      | { }                   | The template strings used to render markdown into html. See below for more details.
| templateLocations | `` {page: path.resolve(__dirname, '../templates/page.tpl.html') }`` | File locations for templates used to render markdown into html. See below for more details.
| themeFiles     | [ ]                   | Additional files to copy into the output directory.


_Templates loaded from the templateLocations take precedence over template strings._



