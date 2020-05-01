/* eslint-disable no-use-before-define */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  email: { type: String },
  password: { type: String }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
