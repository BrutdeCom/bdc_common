/*eslint no-undef: "off"*/
import { isValidEnum } from '../../src/validator/isValidEnum'

import { expect } from 'chai'

describe('src/utils', function () {
  describe('isValidEnum', function () {
    it('Return true', function () {
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

    it('Return false', function () {
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

        expect(isValidEnum('five', enumTest)).equal(false)
        expect(isValidEnum('six', enumTest)).equal(false)
        expect(isValidEnum('seven', enumTest)).equal(false)
        expect(isValidEnum('eight', enumTest)).equal(false)
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
      expect(isValidEnum(null, null)).equal(false)
      expect(isValidEnum('test', null)).equal(false)
      expect(isValidEnum(null, ['test'])).equal(false)
    })
  })
})