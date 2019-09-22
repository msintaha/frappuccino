const authenticator = require('../middlewares/authenticator');
const User = require('../../user');

module.exports = (app) => {
  app.patch('/api/users/:id', authenticator.requiresLogin, User.update);
  app.get('/api/users/:id', User.get);
  app.get('/api/users/', User.list);
  app.delete('/api/users/:id', authenticator.requiresLogin, User.remove);
  app.get('/api/users/logged-in', authenticator.requiresLogin, User.getCurrentUser);
};
