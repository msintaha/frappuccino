const authenticator = require('../middlewares/authenticator');
const User = require('../../user');

module.exports = (app) => {
  app.patch('/users/:id', authenticator.requiresLogin, User.update);
  app.get('/users/:id', authenticator.requiresLogin, User.get);
  app.get('/users/', authenticator.requiresLogin, User.list);
  app.delete('/users/:id', authenticator.requiresLogin, User.remove);
  app.get('/users/logged-in', authenticator.requiresLogin, User.getCurrentUser);
};
