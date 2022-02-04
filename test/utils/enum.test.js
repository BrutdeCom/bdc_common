const { getEnumValues, getEnumSubTypeValues } = require('../../src/utils/enum')

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

  describe('getEnumSubTypeValues', function () {
    const payloadEnum = [
        {
          value: 'theme-service-book',
          text: `Carnet d'entretien`,
          subTheme: [
              {
                value: 'sub-theme-service-book',
                text: `Carnet d'entretien`
              }
          ]
        },
        {
            value: 'theme-framework',
            text: 'Charpente',
            subTheme: [
                {
                  value: 'sub-theme-wood-state',
                  text: 'Etat du bois'
                },
                {
                    value: 'sub-theme-termites',
                    text: 'Termites'
                }
            ]
          },
          {
            value: 'theme-roof',
            text: 'Toiture',
            subTheme: [
                {
                  value: 'sub-theme-roof-tiles',
                  text: 'Les tuiles'
                },
                {
                  value: 'sub-theme-ridge-and-hip',
                  text: 'Faîtage et arêtier'
                }
            ]
          }
    ]

    it('should be a function', function () {
      expect(getEnumSubTypeValues).to.be.a('function')
    })

    it('should be an array parameter', function () {
      expect(payloadEnum).to.be.a('array')
    })

    it('should be return an array with anum values', function () {
      expect(getEnumSubTypeValues(payloadEnum, 'subTheme')).deep.equal(
          [
              'sub-theme-service-book', 
              'sub-theme-wood-state', 
              'sub-theme-termites', 
              'sub-theme-roof-tiles', 
              'sub-theme-ridge-and-hip'
         ])
    })

    it('should be return throw error', function () {
      expect(() => getEnumSubTypeValues('test', 'key')).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumSubTypeValues(null, 'key')).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumSubTypeValues([], 'key')).throws('The payloadEnum parameter must be an array with at least one element.')
      expect(() => getEnumSubTypeValues(['test'], 4)).throws('The key parameter must be a string.')
      expect(() => getEnumSubTypeValues(['test'], null)).throws('The key parameter must be a string.')
      expect(() => getEnumSubTypeValues(['test'])).throws('The key parameter must be a string.')
    })
  })