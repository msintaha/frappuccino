const User = require('../../user');
const utils = require('../../utils');
const authenticator = require('../middlewares/authenticator'); 

module.exports = (app) => {
  app.patch('/api/users/:id', utils.wrapAsync(User.update));
  app.get('/api/users/:id', utils.wrapAsync(User.get));
  app.get('/api/users', utils.wrapAsync(User.list));
  app.post('/api/users', utils.wrapAsync(User.create));
  app.delete('/api/users/:id', utils.wrapAsync(User.remove));
  app.get('/api/users/logged-in', authenticator.requiresLogin, utils.wrapAsync(User.getCurrentUser));
};
