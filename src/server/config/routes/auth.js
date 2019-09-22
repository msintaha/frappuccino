const auth = require('../../auth');
const authenticator = require('../middlewares/authenticator');

module.exports = (app) => {
  app.post('/auth/sign-up', auth.signUp);
  app.post('/auth/login', auth.login);
  app.post('/auth/logout', authenticator.requiresLogin, auth.logout);
};
