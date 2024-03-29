# Blog content management

Blog posts should be added as a new folder in: `content/assets/blog/<slug>/index.md` where `<slug>` is the URL that you want the blog post to have. The slug will be prefixed by `/blog/`, eg. `/blog/test/hello-world`.

## `index.md`
`index.md` is an Markdown file which contains the content of the post as well as the meta data of the post.

Use the meta syntax at the begging of the file to configure the meta data of the post:
```
---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
author: benjamin
linkedin_link: https://www.linkedin.com/feed/update/urn:li:activity:6981517377830060032
hackernews_link: https://blog.otterstack.com/posts/202212-doom-calculator/
---
<post content>
```

Description of the meta properties:
- `title`: title of the page and the post
- `date`: to order the post on the blog page. The most recent posts will be displayed first.
- `description`: short description on the blog page that is used on the blog page (listing of the posts) and the social media links. Keep this short ~300 characters.
- `author`: link to the author in `content/data/people.yaml`
- `linkedin_link`: (Optional) link to the LinkedIn post that will be added to the bottom of the post as "Discuss further on LinkedIn"
- `hackernews_link`: (Optional) link to the HackerNews in that will be added to the bottom of the post as "Discuss further on HackerNews"

For the content please see examples in [test posts ../content/assets/blog/test/](../content/assets/blog/test/).

## Markdown Linting

Blog markdown files are linted to ensure a consistent styling and format. This is enforced in the
CI. To check linting locally run:
```shell
./node_modules/.bin/markdownlint-cli2-config .markdownlint-cli2.yaml content/assets/blog/**/*.md
```

Reference to all config file options can be found
[here](https://github.com/DavidAnson/markdownlint/blob/main/schema/.markdownlint.yaml)

## Images
It is possible to add images to the post.

Add the image file to the folder.

Then add to the `index.md` file:
`![ALT Text](./<name of file>.jpg)`

## Author
The link between the post and the author is made through the `author` property in the meta of the post and the `id` value in `content/date/people.yaml`.

See [People docs](./people.md) for more information.

## Discussion and comments on posts
We have gone for a minimal method for having discussion and comments on posts. There is no comment functionality in the blog but we use LinkedIn or HackerNews to continue the discussion.

As such the process for adding a discussion for a blog post should be:
1. write the blog post following the instructions above
2. make a PR for the post and have it merged in to `main`
3. Share the blog post on LinkedIn or HackerNews
4. Add the meta property: `linkedin_link` or `hackernews_link` which to be the link to the message on these social media sites
5. make a PR for the meta changes and have it merged in to `main`

There will then be a `Discuss further on <site>` at the bottom of the post.

## Test pages
There are a number of test pages which are used for development.

These test pages are in the folder `/content/assets/blog/test/`. Pages in this folder will in general be ignored and not included in the build. However in theses cases they will be included:
- the build environment (GATSBY_ACTIVE_ENV or NODE_ENV) is `development`. `development` is the default.
- the environment variable `INCLUDE_TEST_BLOG_ASSETS` is set in the `.env` file for the environment.

When developing this means that if you run `gatsby develop` the test pages will be in the website. If you use `gatsby build` they will not be included unless you set the `INCLUDE_TEST_BLOG_ASSETS` in the `.env.production` file or another environment dotfile.

The default `.env.staging2` file has the `INCLUDE_TEST_BLOG_ASSETS` set. So `staging2` will have the test blog posts.
