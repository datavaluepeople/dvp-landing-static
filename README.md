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

### Environment file
Currently there are a number of `.env` files which configure the build of different environment.
The files are not in version control but can be downloaded by:
```
gsutil -m cp gs://dvp-landing-static-env/* .
```

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

Requirements:
- You will need to have the `.env` files for the deploy see above
- `firebase-cli` installed

There are three environments that can be deployed to: production, staging and staging2.
For each environments it is important to configure the firebase project that will be deployed to and the `GATSBY_ACTIVE_ENV`.

- Production:
    - gcloud and firebase project: `dvp-landing-266011`
    - URL: `https://datavaluepeople.com`
    - GATSBY_ACTIVE_ENV: `production`
- Staging:
    - gcloud and firebase project: `dvp-landing-staging`
    - URL: `https://dvp-landing-staging.web.app/`
    - GATSBY_ACTIVE_ENV: `staging`
- Staging2:
    - gcloud and firebase project: `dvp-landing-static`
    - URL: `https://dvp-landing-static.web.app/`
    - GATSBY_ACTIVE_ENV: `staging2`


To deploy to `staging2` the commands are:
```
GATSBY_ACTIVE_ENV=staging2 gatsby build
firebase deploy
```

### Notes
You will need to have permission to be able to deploy to the project as defined in `.firebaserc`. You should have this if you log in with your datavaluepeople account.

## CICD testing
You can test the CICD:
`gcloud builds submit --config cloudbuild.yaml . --substitutions _GATSBY_ACTIVE_ENV=staging2,_TARGET_PROJECT_ID=dvp-landing-static`

The substitutions above will deploy to staging2.
