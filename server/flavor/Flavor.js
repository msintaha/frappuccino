const mongoose = require('mongoose');

const { Schema } = mongoose;

const FlavorSchema = new Schema({
  name: { type: String },
});

const Flavor = mongoose.model('Flavor', FlavorSchema);
module.exports = Flavor;
