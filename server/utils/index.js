function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}

const responseValidatorAsync = function (expectedStatusCode, validationFunction) {
  return {
    json: function (statusCode, data) {
      statusCode.should.equal(expectedStatusCode);
      validationFunction(data);
    },
    send: function (statusCode, data) {
      statusCode.should.equal(expectedStatusCode);
      validationFunction(data);
    }
  };
};

module.exports = {
  responseValidatorAsync,
  wrapAsync,
};
