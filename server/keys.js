module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  mongoHost: process.env.MONGOHOST || 'localhost',
  mongoDbName: process.env.MONGODB_NAME || 'frappuccino',
  mongoTestDbName: process.env.MONGODB_TEST || 'frappuccino_test',
  mongoPort: process.env.MONGOPORT || '27017',
  expressSessionKey: process.env.EXPRESS_SESSION_KEY,
  expressSessionSecret: process.env.EXPRESS_SESSION_SECRET,
};
