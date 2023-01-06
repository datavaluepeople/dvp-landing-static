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
linkedin_link: https://www.linkedin.com/feed/update/urn:li:activity:6981517377830060032
hackernews_link: https://blog.otterstack.com/posts/202212-doom-calculator/
---
```

These meta properties will be used:
- `title`: title of the page and the post
- `date`: to order the post. Recent displayed first on the blog
- `description`: short description on the blog page
- `author`: link to the author in `content/data/people.yaml`
- `linkedin_link`: (Optional) link to the LinkedIn post that will be added to the bottom of the post as "Discuss further on LinkedIn"
- `hackernews_link`: (Optional) link to the HackerNews in that will be added to the bottom of the post as "Discuss further on HackerNews"

## Images
It is possible to add images to the post.

Add the image file to the folder.

Then add to the md file:
`![ALT Text](./some-image.jpg)`

## Author
The link between the post and the author is made through the `author` property in the meta of the post and the `id` value in `content/date/people.yaml`.

See [People docs](./people.md) for more information.

## Test pages
There are a number of test pages which are used for development.

These test pages are in the folder `/content/assets/blog/test/`. Pages in this folder will in general be ignored and not included in the build. However in theses cases they will be included:
- the build environment (GATSBY_ACTIVE_ENV or NODE_ENV) is `development`. `development` is the default is non is set.
- the environment variable `INCLUDE_TEST_BLOG_ASSETS` is set in the `.env` file for the environment.

When developing this means that if you run `gatsby develop` the test pages will be in the website. If you use `gatsby build` they will not be unless you set the `INCLUDE_TEST_BLOG_ASSETS` in the `.env.production` file.
