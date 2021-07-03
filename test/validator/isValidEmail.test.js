const { isValidEmail } = require('../../src/validator/isValidEmail')

const expect = require('chai').expect

describe('isValidEmail', function () {
    const email = 'test@test.fr'

    it('should be a function', function () {
      expect(isValidEmail).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(email).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidEmail(email)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidEmail(email)).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidEmail('')).be.equal(false)
      expect(isValidEmail(12)).be.equal(false)
      expect(isValidEmail('test')).be.equal(false)
      expect(isValidEmail('test@')).be.equal(false)
      expect(isValidEmail('test.fr')).be.equal(false)
      expect(isValidEmail('test@.fr')).be.equal(false)
      expect(isValidEmail(null)).be.equal(false)
    })
  })