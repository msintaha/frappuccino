/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');
const expressSession = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(expressSession);
const mongoose = require('mongoose');
const keys = require('./keys');
const config = require('./config');

const app = express();
const server = http.createServer(app);

app.use(cors());

const router = express.Router();
app.use(router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(expressSession({
  key: keys.expressSessionKey,
  secret: keys.expressSessionSecret,
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({
    host: keys.redisHost,
    port: keys.redisPort,
    client: redis.createClient(keys.redisPort, keys.redisHost),
  })
}));

app.use((req, res, next) => {
  if (req.cookies && req.cookies.user_sid && !req.session.user) {
    res.clearCookie(keys.expressSessionKey);
  }
  next();
});

app.use((err, req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Missing authentication credentials.');
  }
  next();
});


server.listen(5000, (err) => {
  if (err) { process.exit(1); }
  console.log('Server is up and running on port number 8080.');

  mongoose.set('useFindAndModify', false);

  mongoose.connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on('error', (_err) => {
    if (_err) { process.exit(1); }
  });

  require('./models');
  require('./config/routes/index.js')(app);
});

router.get('/_status', (req, res) => {
  res.send('ok');
});

module.exports = app;
