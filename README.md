# datavaluepeople landing website

This repo is based of https://github.com/gatsbyjs/gatsby-starter-blog.

## Local Dev environment
Install node version manager: see https://www.gatsbyjs.org/tutorial/part-zero/.

Install node (uses .nvmrc):
```
nvm use
nvm install
nvm which
```

Install gatsby: `npm install -g gatsby`

Once you have node and gatsby installed:
```
npm install
gatsby develop
```

Gatsby will then start a local server so you can view the state of the website
through the browser (probs http://localhost:8000). It will
also automatically update when changes have been made.

To then restart once when you have a new session (you turn your computer off and on):
```
nvm use
gatsby develop
```

If you install something with `npm` you will need to do it in a session that has `nvm use` initialised.

Once you have node and gatsby installed:
```
npm install
gatsby develop
```

## Deployment
Currently the repo is set up to deploy to the firebase. That was done follow this [tutorial](https://www.gatsbyjs.org/docs/deploying-to-firebase/).

As such it should be a matter of installing firebase-cli on your local. Then:
- `gatsby build`
- `firebase deploy`

### Notes
You will need to have permission to be able to deploy to the project as defined in `.firebaserc`. You should have this if you log in with your datavaluepeople account.
