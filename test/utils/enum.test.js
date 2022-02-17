const { getEnumValues, getEnumSubTypeValues, getEnumSubTypes, getEnumSubTypeValuesByParent, getEnumSubTypeByParent } = require('../../src/utils/enum')

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

  describe('getEnumSubTypes', function () {
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
        }
  ]

    it('should be a function', function () {
      expect(getEnumSubTypes).to.be.a('function')
    })

    it('should be an array parameter', function () {
      expect(payloadEnum).to.be.a('array')
    })

    it('should be return an array with enum sub type objects', function () {
      expect(getEnumSubTypes(payloadEnum, 'subTheme')).deep.equal([
        {
          value: 'sub-theme-service-book',
          text: `Carnet d'entretien`
        },
        {
          value: 'sub-theme-wood-state',
          text: 'Etat du bois'
        },
        {
          value: 'sub-theme-termites',
          text: 'Termites'
        }
      ])
    })

    it('should be return throw error', function () {
      expect(() => getEnumSubTypes('test', 'key')).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumSubTypes(null, 'key')).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumSubTypes([], 'key')).throws('The payloadEnum parameter must be an array with at least one element.')

      expect(() => getEnumSubTypes(['test'], 4)).throws('The key parameter must be a string.')
      expect(() => getEnumSubTypes(['test'], null)).throws('The key parameter must be a string.')
      expect(() => getEnumSubTypes(['test'])).throws('The key parameter must be a string.')
    })
  })

  describe('getEnumSubTypeValuesByParent', function () {
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
      expect(getEnumSubTypeValuesByParent).to.be.a('function')
    })

    it('should be an array parameter', function () {
      expect(payloadEnum).to.be.a('array')
    })

    it('should be return an array with anum values', function () {
      expect(getEnumSubTypeValuesByParent(payloadEnum, 'subTheme', 'theme-roof')).deep.equal(
          [
              'sub-theme-roof-tiles', 
              'sub-theme-ridge-and-hip'
          ])
    })

    it('should be return throw error', function () {
      expect(() => getEnumSubTypeValuesByParent('test', 'key', 'parent')).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumSubTypeValuesByParent(null, 'key', 'parent')).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumSubTypeValuesByParent([], 'key', 'parent')).throws('The payloadEnum parameter must be an array with at least one element.')

      expect(() => getEnumSubTypeValuesByParent(['test'], 4, 'parent')).throws('The key parameter must be a string.')
      expect(() => getEnumSubTypeValuesByParent(['test'], null, 'parent')).throws('The key parameter must be a string.')
      expect(() => getEnumSubTypeValuesByParent(['test'])).throws('The key parameter must be a string.')

      expect(() => getEnumSubTypeValuesByParent(['test'], 'key', 12)).throws('The parentKey parameter must be a string.')
      expect(() => getEnumSubTypeValuesByParent(['test'], 'key', null)).throws('The parentKey parameter must be a string.')
      expect(() => getEnumSubTypeValuesByParent(['test'], 'key')).throws('The parentKey parameter must be a string.')
    })
  })

  describe('getEnumSubTypeByParent', function () {
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
      expect(getEnumSubTypeByParent).to.be.a('function')
    })

    it('should be an array parameter', function () {
      expect(payloadEnum).to.be.a('array')
    })

    it('should be return an array with enum values', function () {
      expect(getEnumSubTypeByParent(payloadEnum, 'subTheme', 'theme-roof')).deep.equal(
        [
          {
            value: 'sub-theme-roof-tiles',
            text: 'Les tuiles'
          },
          {
            value: 'sub-theme-ridge-and-hip',
            text: 'Faîtage et arêtier'
          }
      ])
    })

    it('should be return throw error', function () {
      expect(() => getEnumSubTypeByParent('test', 'key', 'parent')).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumSubTypeByParent(null, 'key', 'parent')).throws('The payloadEnum parameter must be an array.')
      expect(() => getEnumSubTypeByParent([], 'key', 'parent')).throws('The payloadEnum parameter must be an array with at least one element.')

      expect(() => getEnumSubTypeByParent(['test'], 4, 'parent')).throws('The key parameter must be a string.')
      expect(() => getEnumSubTypeByParent(['test'], null, 'parent')).throws('The key parameter must be a string.')
      expect(() => getEnumSubTypeByParent(['test'])).throws('The key parameter must be a string.')

      expect(() => getEnumSubTypeByParent(['test'], 'key', 12)).throws('The parentKey parameter must be a string.')
      expect(() => getEnumSubTypeByParent(['test'], 'key', null)).throws('The parentKey parameter must be a string.')
      expect(() => getEnumSubTypeByParent(['test'], 'key')).throws('The parentKey parameter must be a string.')
    })
  })