module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  mongoHost: process.env.MONGOHOST,
  mongoDbName: process.env.MONGODB_NAME,
  mongoTestDbName: process.env.MONGODB_TEST,
  mongoPort: process.env.MONGOPORT,
  expressSessionKey: process.env.EXPRESS_SESSION_KEY,
  expressSessionSecret: process.env.EXPRESS_SESSION_SECRET,
};
