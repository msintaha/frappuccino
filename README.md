<p align="center">
  <img width="100" src="https://raw.githubusercontent.com/msintaha/frappuccino/master/assets/frappuccino.png">
</p>

# Frappuccino
## A Node and React Boilerplate for fast development

### Setup
- To install packages run, `yarn install`
- To run client and server separately `yarn client` and `yarn server` 
- To check if the server is up and running, hit http://localhost:8080/_status
- Client will be running at http://localhost:3000
- To run client and server concurrently, `yarn dev`
- To setup mongodb, create a db called `frappuccino` (or whatever name you prefer for your DB by replacing this name in server.js) in Robo 3T

### Project Structure

```
.
├── assets
│   └── frappuccino.png
├── nodemon.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── client
│   │   ├── App.jsx
│   │   ├── app.scss
│   │   ├── components
│   │   │   └── Header
│   │   │       └── index.jsx
│   │   ├── config.js
│   │   ├── index.jsx
│   │   ├── pages
│   │   │   ├── Home
│   │   │   │   ├── _index.scss
│   │   │   │   └── index.jsx
│   │   │   └── _index.scss
│   │   └── services
│   │       └── APIService.js
│   └── server
│       ├── auth
│       │   └── index.js
│       ├── config
│       │   ├── middlewares
│       │   │   └── authenticator.js
│       │   └── routes
│       │       ├── auth.js
│       │       └── user.js
│       ├── index.js
│       ├── models.js
│       └── user
│           ├── User.js
│           └── index.js
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── yarn.lock
```

# License
This project is licensed under the MIT license.

If you have any questions or comments, please create an issue.
