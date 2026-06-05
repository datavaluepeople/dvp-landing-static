# Development and deployment

This code base uses:
- [gatsby](https://www.gatsbyjs.com/): as framework
- [firebase](https://firebase.google.com/): for hosting and deployments

## Submitting PRs

Pull requests should be made on `staging` rather than `main`.

## Local Dev environment
Install node version manager: see
https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating

Install node (uses .nvmrc):
```
nvm use
nvm install
nvm which
```

Install: `npm install`

### Note on browser usage
Benjamin had a lot of problems with changing styling on chrome I recommend doing styling work on
Firefox and then doing: `gatsby clean; gatsby develop` and checking on Chrome. I think this comes
from the caching of Chrome.

### Environment file
Currently there are a number of `.env` files which configure the build of different environment.
The files are not in version control but can be downloaded by:
```
gsutil -m cp gs://dvp-landing-static-env/* .
```

Once you have node and packages installed:
```
npm run develop
```

Gatsby will then start a local server so you can view the state of the website
through the browser (probs http://localhost:8000). It will
also automatically update when changes have been made.

To then restart once when you have a new session (you turn your computer off and on):
```
nvm use
npm run develop
```

If you install something with `npm` you will need to do it in a session that has `nvm use` initialised.

If you want to run gatsby command you can do:
```
npx gatsby <command>
```

## Deployment

Deployments are handled automatically by Cloud Build triggers on push:

1. Merge your PR into `staging` - Cloud Build deploys to [https://dvp-landing-staging.web.app/](https://dvp-landing-staging.web.app/)
2. Review the change on staging
3. Merge `staging` into `main` - Cloud Build deploys to [https://datavaluepeople.com](https://datavaluepeople.com)

The Cloud Build triggers live in the `dvp-landing-266011` GCP project.

<details>
<summary>Legacy manual deployment</summary>

Requirements:
- You will need to have the `.env` files for the deploy see above
- `firebase-cli` installed

There are two environments that can be deployed to: production and staging.
For each environment it is important to configure the firebase project that will be deployed to and the `GATSBY_ACTIVE_ENV`.

- Production:
    - gcloud and firebase project: `dvp-landing-266011`
    - URL: `https://datavaluepeople.com`
    - GATSBY_ACTIVE_ENV: `production`
- Staging:
    - gcloud and firebase project: `dvp-landing-staging`
    - URL: `https://dvp-landing-staging.web.app/`
    - GATSBY_ACTIVE_ENV: `staging`

You will need to have permission to be able to deploy to the project. You should have this if you log in with your datavaluepeople account.

</details>
