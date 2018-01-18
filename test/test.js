const _           = require('lodash');
const faker       = require('faker');
const { expect }  = require('chai');

const {
  generateActionConstant,
  generateActionConstants,
  generateActionCreator,
  generateActionCreators
} = require('../lib/api');


describe('Redux Fast Actions', function() {

  describe('#generateActionConstant()', function() {

    it('should create an action constant', function() {
      const key   = faker.random.word();
      const value = faker.random.word();

      const actionConstant          = generateActionConstant(key, value);
      const expectedActionConstant  =  _.snakeCase(`${key}${_.upperFirst(value)}`).toUpperCase();
      expect(actionConstant).to.equal(expectedActionConstant);
    });
  });


  describe('#generateActionCreator()', function() {

    it('should create an action creator function', function() {
      const key             = faker.random.word();
      const value           = faker.random.word();
      const payloadKey      = 'test'
      const action          = { payload: [payloadKey] };
      const actionConstant  = generateActionConstant(key, value);
      const actionCreator   = generateActionCreator(key, action, value);
      const payloadValue    = faker.random.word();

      expect(actionCreator).to.be.a('function');
      const result = actionCreator(payloadValue);
      expect(result).to.be.an('object');
      expect(result).to.have.property('type', actionConstant);

      const expectedPayload = { [payloadKey]: payloadValue };
      expect(result).to.have.deep.property('payload', expectedPayload);
    });
  });

});