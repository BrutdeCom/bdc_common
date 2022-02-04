const { validateStringRequestItems } = require('../../src/utils/utils')

const expect = require('chai').expect

describe('validateStringRequestItems', function () {
    it('should be a function', function () {
      expect(validateStringRequestItems).to.be.a('function')
    })

    it('should be return true if request is valid', function () {
      expect(validateStringRequestItems({
        value1: 'test1',
        value2: 'test2',
        value3: 'test3'
      })).be.equal(true)
    })

    it('should be return false if request is not valid', function () {
        expect(validateStringRequestItems({
          value1: 'test1',
          value2: 'test2',
          value3: 12
        })).be.equal(false)
      })
  })