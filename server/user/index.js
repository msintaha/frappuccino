const _ = require('lodash');
const User = require('./User');

async function update(req, res) {
  const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
  return res.json(200, updatedUser);
}

async function list(req, res) {
  let queryObject = {};

  if (_.get(req.query, 'email')) { queryObject = { email: req.query.email }; }

  const users = await User.find(queryObject);
  return res.json(200, users);
}

async function create(req, res) {
  const user = new User(req.body);
  const newUser = await user.save();
  return res.json(201, newUser);
}

async function remove(req, res) {
  const deletedUser = await User.findByIdAndRemove(req.params.id);
  return res.json(200, deletedUser);
}

async function get(req, res) {
  const user = await User.findOne({ _id: req.params.id });
  return res.json(200, user);
}

async function getCurrentUser(req, res) {
  const currentUser = await User.findById(req.session.user._id);
  return res.json(200, currentUser);
}

module.exports = {
  create,
  update,
  list,
  remove,
  get,
  getCurrentUser
};
