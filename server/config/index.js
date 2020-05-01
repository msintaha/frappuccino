const keys = require('../keys');

module.exports = {
  DB_URL: `mongodb://${keys.mongoHost}:${keys.mongoPort}/${keys.mongoDbName}`,
  TEST_DB_URL: `mongodb://${keys.mongoHost}:${keys.mongoPort}/${keys.mongoTestDbName}`,
};
