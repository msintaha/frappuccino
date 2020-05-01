const auth = require('../../auth');
const authenticator = require('../middlewares/authenticator');

module.exports = (app) => {
  app.post('/api/auth/sign-up', auth.signUp);
  app.post('/api/auth/login', auth.login);
  app.post('/api/auth/logout', authenticator.requiresLogin, auth.logout);
};
