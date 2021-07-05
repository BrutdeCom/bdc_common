const { isValidAddress } = require('../../src/validator/isValidAddress')

const expect = require('chai').expect

describe('isValidAddress', function () {
    const address = '1 rue test'

    it('should be a function', function () {
      expect(isValidAddress).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(address).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidAddress(address)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidAddress(address)).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidAddress('test')).be.equal(false)
      expect(isValidAddress('')).be.equal(false)
      expect(isValidAddress()).be.equal(false)
      expect(isValidAddress(null)).be.equal(false)
    })
  })