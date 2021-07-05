const { isValidCountry } = require('../../src/validator/isValidCountry')

const expect = require('chai').expect

describe('isValidCountry', function () {
    const country = 'France'

    it('should be a function', function () {
      expect(isValidCountry).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(country).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidCountry(country)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidCountry(country)).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidCountry('t')).be.equal(false)
      expect(isValidCountry('')).be.equal(false)
      expect(isValidCountry()).be.equal(false)
      expect(isValidCountry(null)).be.equal(false)
    })
  })