function requiresLogin(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  const err = new Error('You must be logged in to view this page.');
  err.statusCode = 401;
  return next(err);
}

module.exports = {
  requiresLogin
};
