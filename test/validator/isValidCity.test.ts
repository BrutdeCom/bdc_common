import { isValidCity } from '../../src/validator/isValidCity'

import { expect } from 'chai'

describe('isValidCity', function () {
    const city = 'Paris'

    it('should be a function', function () {
      expect(isValidCity).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(city).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidCity(city)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidCity(city)).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidCity('t')).be.equal(false)
      expect(isValidCity('Paris09')).be.equal(false)
      expect(isValidCity('')).be.equal(false)
      expect(isValidCity()).be.equal(false)
      expect(isValidCity(null)).be.equal(false)
    })
  })