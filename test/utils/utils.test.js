const { validateStringRequestItems, nextValue } = require('../../src/utils/utils')

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

  describe('nextValue', function () {
    it('Return next value in array', function () {
      expect(nextValue(['test1', 'test2', 'test3'], 'test1')).eq('test2')
      expect(nextValue(['test1', 'test2', 'test3'], 'test2')).eq('test3')
      expect(nextValue(['test1', 'test2', 'test3'], 'test3')).eq('test1')
      expect(nextValue([
        {
          value: 'test4'
        },
        {
          value: 'test2'
        }], 'test4')).eq('test2')
    })
  })