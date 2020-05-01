const auth = require('./auth');
const user = require('./user');
const flavor = require('./flavor');

module.exports = (app) => {
  auth(app);
  user(app);
  flavor(app);
};
