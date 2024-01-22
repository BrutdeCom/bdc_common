import { isValidZip } from '../../src/validator/isValidZip'

import { expect } from 'chai'

describe('isValidZip', function () {
    const zip = '64400'

    it('should be a function', function () {
      expect(isValidZip).to.be.a('function')
    })

    it('should be a string parameter', function () {
      expect(zip).to.be.a('string')
    })

    it('should be return a boolean', function () {
      expect(isValidZip(zip)).to.be.a('boolean')
    })

    it('should be return a true value', function () {
      expect(isValidZip(zip)).be.equal(true)
    })

    it('should be return a false value', function () {
      expect(isValidZip('teste')).be.equal(false)
      expect(isValidZip('40')).be.equal(false)
      expect(isValidZip('')).be.equal(false)
      expect(isValidZip()).be.equal(false)
      expect(isValidZip(null)).be.equal(false)
    })
  })