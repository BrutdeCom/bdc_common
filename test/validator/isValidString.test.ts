import { isValidString } from '../../src/validator/isValidString'

import { expect } from 'chai'

  describe('isValidString', function () {
    const string = 'test'

    it('should be a function', function () {
      expect(isValidString).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(string).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidString(string)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidString(string)).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidString('')).be.equal(false)
      expect(isValidString()).be.equal(false)
      expect(isValidString(12)).be.equal(false)
      expect(isValidString(null)).be.equal(false)
    })
  })