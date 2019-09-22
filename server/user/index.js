const _ = require('lodash');
const User = require('./User');

async function update(req, res) {
  const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
  return res.status(200).send(updatedUser);
}

async function list(req, res) {
  let queryObject = {};

  if (_.get(req.query, 'email')) { queryObject = { email: req.query.email }; }

  const users = await User.find(queryObject);
  return res.status(200).send(users);
}

async function remove(req, res) {
  const deletedUser = await User.findByIdAndRemove(req.params.id);
  return res.status(200).send(deletedUser);
}

async function get(req, res) {
  const user = await User.findOne({ _id: req.params.id });
  return res.status(200).send(user);
}

async function getCurrentUser(req, res) {
  const currentUser = await User.findById(req.session.user._id);
  return res.status(200).send(currentUser);
}

module.exports = {
  update,
  list,
  remove,
  get,
  getCurrentUser
};
