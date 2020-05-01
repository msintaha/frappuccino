const Flavor = require('../../flavor');
const utils = require('../../utils');

module.exports = (app) => {
  app.get('/api/flavors', utils.wrapAsync(Flavor.list));
  app.post('/api/flavors', utils.wrapAsync(Flavor.create));
};
