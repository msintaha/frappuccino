const authenticator = require('../middlewares/authenticator');
const User = require('../../user');
const utils = require('../../utils');

module.exports = (app) => {
  app.patch('/api/users/:id', authenticator.requiresLogin, utils.wrapAsync(User.update));
  app.get('/api/users/:id', utils.wrapAsync(User.get));
  app.get('/api/users/', utils.wrapAsync(User.list));
  app.delete('/api/users/:id', authenticator.requiresLogin, utils.wrapAsync(User.remove));
  app.get('/api/users/logged-in', authenticator.requiresLogin, utils.wrapAsync(User.getCurrentUser));
};
