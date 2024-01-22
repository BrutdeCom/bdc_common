import { isValidLastname } from '../../src/validator/isValidLastname'

import { expect } from 'chai'

describe('isValidLastname', function () {
    const lastname = 'Lastname'

    it('should be a function', function () {
      expect(isValidLastname).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(lastname).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidLastname(lastname)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidLastname(lastname)).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidLastname('t')).be.equal(false)
      expect(isValidLastname('')).be.equal(false)
      expect(isValidLastname()).be.equal(false)
      expect(isValidLastname(null)).be.equal(false)
    })
  })