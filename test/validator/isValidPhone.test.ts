import { isValidPhone } from '../../src/validator/isValidPhone'

import { expect } from 'chai'

describe('isValidPhone', function () {
    const mobilePhone = '0625423265'

    it('should be a function', function () {
      expect(isValidPhone).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(mobilePhone).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidPhone(mobilePhone)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidPhone(mobilePhone)).be.equal(true)
      expect(isValidPhone('0525423265')).be.equal(true)
      expect(isValidPhone('0725423265')).be.equal(true)
      expect(isValidPhone('0925423265')).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidPhone('063254254')).be.equal(false)
      expect(isValidPhone('')).be.equal(false)
      expect(isValidPhone()).be.equal(false)
      expect(isValidPhone(null)).be.equal(false)
    })
  })