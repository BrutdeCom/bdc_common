const { isValidPassword } = require('../../src/validator/isValidPassword')

const expect = require('chai').expect

describe('isValidPassword', function () {
    const password = '1Password*'

    it('should be a function', function () {
      expect(isValidPassword).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(password).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidPassword(password)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidPassword(password)).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidPassword('test')).be.equal(false)
      expect(isValidPassword('Password7')).be.equal(false)
      expect(isValidPassword('Password*')).be.equal(false)
      expect(isValidPassword('')).be.equal(false)
      expect(isValidPassword()).be.equal(false)
      expect(isValidPassword(null)).be.equal(false)
    })
  })