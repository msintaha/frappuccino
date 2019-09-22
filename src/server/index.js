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
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(express.static('dist'));

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.options('*', cors());

const router = express.Router();
app.use(router);

const DB_URL = 'mongodb://localhost:27017/frappuccino'; // Replace with your database name

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(expressSession({
  key: 'frappuccino',
  secret: 'zxc90zxc',
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({
    host: 'localhost',
    port: '6379',
    client: redis.createClient('6379', 'localhost')
  })
}));

app.use((req, res, next) => {
  if (req.cookies && req.cookies.user_sid && !req.session.user) {
    res.clearCookie('frappuccino');
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


server.listen(process.env.PORT || 8080, (err) => {
  if (err) { process.exit(1); }
  console.log('Server is up and running on port number 8080.');

  mongoose.set('useFindAndModify', false);

  mongoose.connect(DB_URL, { useNewUrlParser: true });

  mongoose.connection.on('error', (_err) => {
    if (_err) { process.exit(1); }
  });

  require('./models');
  fs.readdirSync(path.join(__dirname, '/config/routes')).map(file => require(`./config/routes/${file}`)(app));
});

router.get('/_status', (req, res) => {
  res.send('ok');
});

module.exports = app;
