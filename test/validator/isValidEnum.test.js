/*eslint no-undef: "off"*/
const { isValidEnum } = require('../../src/validator/isValidEnum')

const expect = require('chai').expect

describe('src/utils', function () {
  describe('isValidEnum', function () {
    it('String items in array - Return true', function () {
      const enumTest = ['one', 'two', 'three', 'four']
      expect(isValidEnum('one', enumTest)).equal(true)
      expect(isValidEnum('two', enumTest)).equal(true)
      expect(isValidEnum('three', enumTest)).equal(true)
      expect(isValidEnum('four', enumTest)).equal(true)
    })

    it('String items in array - Return false', function () {
      const enumTest = ['five', 'six', 'seven', 'eight']
      expect(isValidEnum('one', enumTest)).equal(false)
      expect(isValidEnum('two', enumTest)).equal(false)
      expect(isValidEnum('three', enumTest)).equal(false)
      expect(isValidEnum('four', enumTest)).equal(false)
      expect(isValidEnum('', ['test'])).equal(false)
      expect(isValidEnum('test', [])).equal(false)
    })

    it('Object items in array - Return true', function () {
        const enumTest = [
            {
                value: 'one',
                text: 'one'
            },
            {
                value: 'two',
                text: 'two'
            },
            {
                value: 'three',
                text: 'three'
            },
            {
                value: 'four',
                text: 'four'
            }
        ]
        expect(isValidEnum('one', enumTest)).equal(true)
        expect(isValidEnum('two', enumTest)).equal(true)
        expect(isValidEnum('three', enumTest)).equal(true)
        expect(isValidEnum('four', enumTest)).equal(true)
      })

    it('Return error is not a string', function () {
      const enumTest = ['five', 'six', 'seven', 'eight']
      expect(() => isValidEnum(33, enumTest)).throws('Value is not a string')
      expect(() => isValidEnum(false, enumTest)).throws('Value is not a string')
      expect(() => isValidEnum(['test'], enumTest)).throws('Value is not a string')
    })

    it('Return error is not an array', function () {
      expect(() => isValidEnum('value', 'test')).throws('Enum is not an array')
      expect(() => isValidEnum('value', 21)).throws('Enum is not an array')
      expect(() => isValidEnum('value', { test: 'test' })).throws('Enum is not an array')
    })

    it('Return null', function () {
      expect(isValidEnum(null, null)).equal(null)
      expect(isValidEnum('test', null)).equal(null)
      expect(isValidEnum(null, ['test'])).equal(null)
    })
  })
})