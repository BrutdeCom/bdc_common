import { isValidSiret } from '../../src/validator/isValidSiret'

import { expect } from 'chai'

describe('isValidSiret', function () {
    it('should be a function', function () {
      expect(isValidSiret).to.be.a('function')
    })

    it('should be return a true value', function () {
      expect(isValidSiret('79448765200024')).be.equal(true)
      expect(isValidSiret('88349007000017')).be.equal(true)
      expect(isValidSiret('79877868400018')).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidSiret('t')).be.equal(false)
      expect(isValidSiret('Paris09')).be.equal(false)
      expect(isValidSiret('')).be.equal(false)
      expect(isValidSiret()).be.equal(false)
      expect(isValidSiret(null)).be.equal(false)
    })
  })