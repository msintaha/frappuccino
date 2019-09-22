const mongoose = require('mongoose');

const User = mongoose.model('User');

const login = (req, res) => {
  User.login(req.body.email, req.body.password, (err, user) => {
    if (err) { res.status(400).send('Login failed!'); }
    req.session.user = user;
    res.status(200).send(user);
  });
};

const signUp = (req, res) => {
  User.signUp(req.body.email, req.body.password, (err, user) => {
    if (err) {
      if (err.message === 'User with email already exists!') {
        res.status(204).send('User already exists!');
      } else {
        res.status(400).send(err);
      }
    }
    req.session.user = user;
    res.status(201).send(user);
  });
};

const logout = (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(400).send('Failed to logout');
      }
      return res.status(200).send('Successfully logged out.');
    });
  }
};

module.exports = {
  login,
  logout,
  signUp
};
