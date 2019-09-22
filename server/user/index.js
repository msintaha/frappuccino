const _ = require('lodash');
const User = require('./User');

function update(req, res) {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updatedUser) => {
    if (err) { return res.status(400).send('Error updating user.'); }
    return res.status(200).send(updatedUser);
  });
}

function list(req, res) {
  let queryObject = {};

  if (_.get(req.query, 'email')) { queryObject = { email: req.query.email }; }

  User.find(queryObject, (err, users) => {
    if (err) { return res.status(400).send('Error fetching users.'); }
    return res.status(200).send(users);
  });
}

function remove(req, res) {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    if (err) { return res.status(400).send('Failed to delete user.'); }
    return res.status(200).send(deletedUser);
  });
}

function get(req, res) {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) { return res.status(400).send('Failed to fetch user.'); }
    return res.status(200).send(user);
  });
}

function getCurrentUser(req, res) {
  User.findById(req.session.user._id, (err, user) => {
    if (err || !user) { return res.status(400).send('Error fetching user.'); }
    return res.status(200).send(user);
  });
}

module.exports = {
  update,
  list,
  remove,
  get,
  getCurrentUser
};
