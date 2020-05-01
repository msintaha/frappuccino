<p align="center">
  <img width="100" src="https://raw.githubusercontent.com/msintaha/frappuccino/master/client/src/assets/images/logo.png">
</p>

# Frappuccino
A Node and React Boilerplate for fast development with CI/CD

### Setup
- Node latest
- Install yarn using `npm i -g yarn`
- If you sdd new packages, run `yarn` to update lockfile

## Docker for running
### Run locally
- `docker-compose up`
### Run tests locally
- `docker ps` to get container id of frappuccino_web and frappuccino_api
- `docker exec -it <container_id> npm run test`

## CI/CD
- Create a travis-ci account, add your repository and activate it in settings
- Add AWS environment variables like access_key and secret_key (for deploying in aws)
- For deploying to aws, uncomment the `deploy: ` portion in the .travis.yml file and add in your bucket_name and app_name
- Also follow steps from https://github.com/msintaha/multi-container-docker readme file for more details on spinning up AWS services. Instead of RDS, use MongoDB Atlas

### Project Structure

```
.
├── Dockerrun.aws.json
├── LICENSE.md
├── README.md
├── client
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── LICENSE.md
│   ├── README.md
│   ├── nginx
│   │   └── default.conf
│   ├── package.json
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.jsx
│   │   ├── app.scss
│   │   ├── assets
│   │   │   └── images
│   │   │       └── logo.png
│   │   ├── components
│   │   │   └── Header
│   │   │       └── index.jsx
│   │   ├── config.js
│   │   ├── index.jsx
│   │   ├── pages
│   │   │   ├── Home
│   │   │   │   ├── Home.spec.js
│   │   │   │   ├── _index.scss
│   │   │   │   └── index.jsx
│   │   │   └── _index.scss
│   │   ├── services
│   │   │   └── FlavorService.js
│   │   ├── test
│   │   │   ├── dom.js
│   │   │   └── helper.js
│   │   └── utils
│   │       └── http.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.prod.js
│   └── yarn.lock
├── docker-compose.yml
├── nginx
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   └── default.conf
└── server
    ├── Dockerfile
    ├── Dockerfile.dev
    ├── auth
    │   └── index.js
    ├── config
    │   ├── index.js
    │   ├── middlewares
    │   │   └── authenticator.js
    │   └── routes
    │       ├── auth.js
    │       ├── flavor.js
    │       ├── index.js
    │       └── user.js
    ├── flavor
    │   ├── Flavor.js
    │   ├── TEST
    │   │   └── runner.js
    │   └── index.js
    ├── index.js
    ├── keys.js
    ├── models.js
    ├── package.json
    ├── user
    │   ├── User.js
    │   └── index.js
    └── utils
        └── index.js
```

# License
This project is licensed under the MIT license.

If you have any questions or comments, please create an issue.
