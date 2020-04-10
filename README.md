# datavaluepeople landing website

This repo is based of https://github.com/gatsbyjs/gatsby-starter-blog.

## Local Dev environment
See https://www.gatsbyjs.org/tutorial/part-zero/. I used node version 10 and had errors when using 12.

## Deployment
Currently the repo is set up to deploy to the firebase. That was done follow this [tutorial](https://www.gatsbyjs.org/docs/deploying-to-firebase/).

As such it should be a matter of installing firebase-cli on your local. Then:
- `gatsby build`
- `firebase deploy`

### Notes
You will need to have permission to be able to deploy to the project as defined in `.firebaserc`. You should have this if you log in with your datavaluepeople account.
