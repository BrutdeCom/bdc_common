import { expect } from 'chai'
import { createEnum } from '../../src/utils/enumType'

describe('utils/enum', function () {
  before(function () {
    this.Type = {
      value1: 'Test1',
      value2: 'test2',
      category1: {
        value3: 'Test3',
        value4: 'test4'
      },
      category2: {
        value5: 'Test5',
        value6: 'test6',
        value7: {
          value: 'test7',
          defaultValue: '4',
          defaultUnit: 'kg'
        }
      },
      value8: {
        value: 'test8',
        defaultUnit: 'kg'
      }
    }

    this.enumType = createEnum(this.Type, 'enumType')
  })

  describe('getName', function () {
    it('Return enum name', function () {
      expect(this.enumType.getName()).eq('enumType')
    })

    it('enumName is not specified', function () {
      expect(() => createEnum({
        test: 'test'
      }).getName()).throws('enumName should be a string')
    })
  })

  describe('next', function () {
    it('Nil - We get the first item', function () {
      expect(this.enumType.next()).eq('Test1')
    })

    it('We get the next item', function () {
      expect(this.enumType.next('Test1')).eq('test2')
      expect(this.enumType.next('test2')).eq('Test3')
      expect(this.enumType.next('Test3')).eq('test4')
      expect(this.enumType.next('test4')).eq('Test5')
    })

    it('We get the first item when selecting the last', function () {
      expect(this.enumType.next('test8')).eq('Test1')
    })
  })

  describe('getValues - Edge Case', function () {
    it('No data in the category', function () {
      const enumType = createEnum({
        test: 'test',
        category1: {}
      }, 'enumType')
      const result = enumType.getValues()
      expect(result).lengthOf(1)
      expect(result).deep.eq([
        'test'
      ])
    })

    it('Value format is not found', function () {
      expect(() => createEnum({
        test: 1
      })).throws('test.value is not a string')
    })

    it('Value is empty', function () {
      expect(() => createEnum({
        test: ''
      }).getValues()).throws('test.value is empty')

      expect(() => createEnum({
        test: '  '
      }).getValues()).throws('test.value is empty')
    })

    it('Value is nil', function () {
      expect(() => createEnum({
        test: null
      })).throws('value is nil')
    })
  })

  describe('excludeTranslations', function () {
    it('Default', function () {
      expect(this.enumType.excludeTranslations()).is.false
    })

    it('Override', function () {
      const enumType = createEnum(this.Type, 'enumType', {
        excludeTranslations: true
      })
      expect(enumType.excludeTranslations()).is.true
    })
  })

  describe('isValid', function () {
    it('Basic', function () {
      const enumType = this.enumType

      expect(enumType.isValid('Test1')).is.true
      expect(enumType.isValid('test1')).is.false
      expect(enumType.isValid('test2')).is.true

      expect(enumType.isValid('ddddd')).is.false
      expect(enumType.isValid('')).is.false
      expect(enumType.isValid(null)).is.false
      expect(enumType.isValid(1)).is.false
    })
  })

  describe('getValues', function () {
    it('Basic', function () {
      const result = this.enumType.getValues()
      expect(result).lengthOf(8)
      expect(result).deep.eq([
        'Test1',
        'test2',
        'Test3',
        'test4',
        'Test5',
        'test6',
        'test7',
        'test8'
      ])
    })
  })

  describe('getCategories', function () {
    it('Basic', function () {
      const result = this.enumType.getCategories()
      expect(result).lengthOf(2)
      expect(result).deep.eq([
        'category1',
        'category2'
      ])
    })
  })

  describe('getCategory', function () {
    it('Basic', function () {
      const result = this.enumType.getCategory('category1')
      expect(result).lengthOf(2)
      expect(result).deep.eq([
        'Test3',
        'test4'
      ])
    })

    it('Category is nil', function () {
      const result = this.enumType.getCategory(null)
      expect(result).lengthOf(3)
      expect(result).deep.eq([
        'Test1',
        'test2',
        'test8'
      ])
    })
  })

  describe('map', function () {
    it('Basic', function () {
      const results = this.enumType.map(value => {
        return `${value} !`
      })
      expect(results[0]).eq('Test1 !')
      expect(results[1]).eq('test2 !')
    })
  })

  describe('Constants', function () {
    it('Basic', function () {
      expect(this.enumType.value1).eq('Test1')
      expect(this.enumType.value2).eq('test2')
    })
  })

  describe('parse', function () {
    it('Basic', function () {
      const result = this.enumType.parse('TEST1')
      expect(result).eq('Test1')
    })

    it('Lower Case', function () {
      const result = this.enumType.parse('test1')
      expect(result).eq('Test1')
    })

    it('With Space', function () {
      const result = this.enumType.parse(' test1 ')
      expect(result).eq('Test1')
    })

    it('Unknown', function () {
      const result = this.enumType.parse('fdfdfd')
      expect(result).is.undefined
    })
  })

  describe('getIndex', function () {
    it('Basic', function () {
      expect(this.enumType.getIndex('TEST1')).eq(0)
      expect(this.enumType.getIndex('TEST2')).eq(1)
    })

    it('Lower Case', function () {
      const result = this.enumType.getIndex('test1')
      expect(result).eq(0)
    })

    it('With Space', function () {
      const result = this.enumType.getIndex(' test1 ')
      expect(result).eq(0)
    })

    it('Unknown', function () {
      const result = this.enumType.getIndex('fdfdfd')
      expect(result).is.undefined
    })
  })

  describe('getMetaData', function () {
    it('Basic', function () {
      expect(this.enumType.getMetaData(this.enumType.value7, 'defaultUnit', 'm')).eq('kg')
      expect(this.enumType.getMetaData(this.enumType.value8, 'defaultUnit', 'm')).eq('kg')
      expect(this.enumType.getMetaData(this.enumType.value7, 'defaultValue')).eq('4')
    })

    it('Value is nil', function () {
      expect(() => this.enumType.getMetaData(null, 'defaultUnit')).throws('value is nil')
    })

    it('Value is not a string', function () {
      expect(() => this.enumType.getMetaData(3, 'defaultUnit')).throws('value is not a string')
      expect(() => this.enumType.getMetaData({ values8: 'test8' }, 'defaultUnit')).throws('value is not a string')
      expect(() => this.enumType.getMetaData({}, 'defaultUnit')).throws('value is not a string')
    })

    it('Value is empty', function () {
      expect(() => this.enumType.getMetaData('', 'defaultUnit')).throws('value is empty')
    })

    it('Key is nil', function () {
      expect(() => this.enumType.getMetaData(this.enumType.value7, null)).throws('key is nil')
      expect(() => this.enumType.getMetaData(this.enumType.value7)).throws('key is nil')
    })

    it('Key is not a string', function () {
      expect(() => this.enumType.getMetaData(this.enumType.value7, {})).throws('key is not a string')
      expect(() => this.enumType.getMetaData(this.enumType.value7, 3)).throws('key is not a string')
      expect(() => this.enumType.getMetaData(this.enumType.value7, { key: 'defaultUnit' })).throws('key is not a string')
    })

    it('Key is empty', function () {
      expect(() => this.enumType.getMetaData(this.enumType.value7, '')).throws('key is empty')
    })

    it('Not have a defaultUnit key in values', function () {
      expect(this.enumType.getMetaData(this.enumType.value2, 'defaultUnit', 'kg')).eq('kg')
    })

    it('Not have a defaultUnit key in values and defaultUnit params is not define', function () {
      expect(this.enumType.getMetaData(this.enumType.value2, 'defaultUnit')).eq(null)
    })
  })
})
