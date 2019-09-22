/* eslint-disable no-use-before-define */
const bcrypt = require('bcrypt');
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

UserSchema.statics.login = (email, password, callback) => {
  User.findOne({ email }, (err, user) => {
    if (err) { return callback(err); }
    if (!user) { return callback(new Error('User with email not found!')); }
    return bcrypt.compare(password, user.password, (_, result) => {
      if (result) {
        return callback(null, user);
      }
      return callback(new Error('Wrong password!'));
    });
  });
};

UserSchema.statics.signUp = (email, password, callback) => {
  User.findOne({ email }, (err, user) => {
    if (err) { return callback(err); }
    if (user) { return callback(new Error('User with email already exists!')); }
    return bcrypt.hash(password, 10, (error, hash) => {
      if (error) { return callback(error); }
      return User.create({
        email,
        password: hash
      }, (_err, newUser) => {
        if (_err) { return callback(_err); }
        return callback(null, newUser);
      });
    });
  });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
