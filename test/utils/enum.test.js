const { getEnumValues } = require('../../src/utils/enum')

const expect = require('chai').expect

describe('getEnumValues', function () {
    const payloadEnum = [
        {
          value: 'admin',
          text: 'Administrateur'
        },
        {
          value: 'superAdmin',
          text: 'Super Administrateur'
        },
        {
          value: 'professional',
          text: 'Professionnel'
        },
        {
          value: 'client',
          text: 'Particulier'
        }
    ]

    it('should be a function', function () {
      expect(getEnumValues).to.be.a('function')
    })

    it('should be an array parameter', function () {
      expect(payloadEnum).to.be.a('array')
    })

    it('should be return an array with anum values', function () {
      expect(getEnumValues(payloadEnum)).deep.equal(['admin', 'superAdmin', 'professional', 'client'])
    })

    it('should be return throw error', function () {
      expect(() => getEnumValues('test')).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumValues(null)).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumValues()).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumValues([])).throws('The payloadEnum parameter must be an array with at least one element.')
    })
  })