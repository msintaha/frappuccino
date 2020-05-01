const _ = require('lodash');
const Flavor = require('./Flavor');

async function list(req, res) {
  const flavors = await Flavor.find({});
  if (flavors.length === 0) {
    const newFlavors = await Flavor.insertMany([
      { name: 'Mocha' },
      { name: 'Latte' },
      { name: 'Cappuccino' },
      { name: 'Machiato' },
      { name: 'Frappe' },
    ])

    return res.json(200, newFlavors);
  }
  return res.json(200, flavors);
}

async function create(req, res) {
  const flavor = new Flavor(req.body);
  const newFlavor = await flavor.save();
  return res.json(201, newFlavor);
}

module.exports = {
  create,
  list,
};
