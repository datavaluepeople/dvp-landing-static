# Blog content management

Blog posts should be added as a new folder in: `content/assets/blog/<slug>/index.md` where `<slug>` is the URL that you want the blog post to have.

## `index.md`
Is an Markdown file which contains the content of the post.

Use the meta syntax at the begging of the file:
```
---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
author: benjamin
---
```

These meta properties will be used:
- `title`: title of the page and the post
- `date`: to order the post. Recent displayed first on the blog
- `description`: short description on the blog page
- `author`: link to the author in `content/data/people.yaml`

## Images
It is possible to add images to the post.

Add the image file to the folder.

Then add to the md file:
`![ALT Text](./some-image.jpg)`

## Author
The link between the post and the author is made through the `author` property in the meta of the post and the `id` value in `content/date/people.yaml`.

See [People docs](./people.md) for more information.
