'use strict';

const config = require('../../config'),
    mongoose = require('mongoose'),
    flavorsController = require('../'),
    Flavor = require('../Flavor'),
    should = require('should'),
    utils = require('../../utils');

describe('Flavor api', () => {
  before((done) => {
    mongoose.connect(config.TEST_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
      console.log(`Connected to ${config.TEST_DB_URL}`);
      done();
    });
  });

  after((done) => {
    mongoose.disconnect(done);
  });

  afterEach((done) => {
    Flavor.deleteMany({}, done);
  });

  describe('List Flavors', () => {
    it('should respond with an array of flavors', (done) => {
      let req = {};

      let res = utils.responseValidatorAsync(200, (flavors) => {
        flavors.length.should.equal(5);
        done();
      });

      flavorsController.list(req, res);
    });
  });

  describe('Create Flavor', () => {
    it('should create a new flavor', (done) => {
      let req = {
        body : {'name': 'Frappuccino'}
      };

      let res = utils.responseValidatorAsync(201, (flavor) => {
        flavor.should.have.property('name');
        flavor.name.should.equal('Frappuccino');
        done();
      });

      flavorsController.create(req, res);
    });
  });
});
