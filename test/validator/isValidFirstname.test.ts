import { isValidFirstname } from '../../src/validator/isValidFirstname'

import { expect } from 'chai'

describe('isValidFirstname', function () {
    const firstname = 'Firstname'

    it('should be a function', function () {
      expect(isValidFirstname).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(firstname).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidFirstname(firstname)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidFirstname(firstname)).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidFirstname('t')).be.equal(false)
      expect(isValidFirstname('')).be.equal(false)
      expect(isValidFirstname()).be.equal(false)
      expect(isValidFirstname(null)).be.equal(false)
    })
  })