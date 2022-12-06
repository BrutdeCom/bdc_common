const { validateStringRequestItems, nextValue, deleteDuplicateKeysAndMakeSumInObjectArray, verifyOrderExpirationTime } = require('../../src/utils/utils')
const moment = require('moment')

const expect = require('chai').expect

describe('validateStringRequestItems', function () {
    it('should be a function', function () {
      expect(validateStringRequestItems).to.be.a('function')
    })

    it('should be return true if request is valid', function () {
      expect(validateStringRequestItems({
        value1: 'test1',
        value2: 'test2',
        value3: 'test3'
      })).be.equal(true)
    })

    it('should be return false if request is not valid', function () {
        expect(validateStringRequestItems({
          value1: 'test1',
          value2: 'test2',
          value3: 12
        })).be.equal(false)
      })
  })

  describe('nextValue', function () {
    it('Return next value in array', function () {
      expect(nextValue(['test1', 'test2', 'test3'], 'test1')).eq('test2')
      expect(nextValue(['test1', 'test2', 'test3'], 'test2')).eq('test3')
      expect(nextValue(['test1', 'test2', 'test3'], 'test3')).eq('test1')
      expect(nextValue([
        {
          value: 'test4'
        },
        {
          value: 'test2'
        }], 'test4')).eq('test2')
    })
  })

    describe('deleteDuplicateKeysAndMakeSumInObjectArray', function () {
        it('should be a function', function () {
            expect(deleteDuplicateKeysAndMakeSumInObjectArray).to.be.a('function')
        })

        it('should be return order items array normalized', async function () {
            const orderItems = [
                { _id: '123', productId: '100', productName: 'Item 01', quantity: 10 },
                { _id: '234', productId: '200', productName: 'Item 02', quantity: 6 },
                { _id: '123', productId: '100', productName: 'Item 01', quantity: 2 },
                { _id: '456', productId: '400', productName: 'Item 04', quantity: 23 },
                { _id: '123', productId: '100', productName: 'Item 01', quantity: 1 },
                { _id: '456', productId: '400', productName: 'Item 04', quantity: 9 }
            ]

            const res = await deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, {
                sumKey: 'quantity',
                idKey: '_id'
            })

            expect(res).to.be.an('array').to.deep.equal([
                {
                    _id: '123',
                    productId: '100',
                    productName: 'Item 01',
                    quantity: 13
                },
                {
                    _id: '234',
                    productId: '200',
                    productName: 'Item 02',
                    quantity: 6
                },
                {
                    _id: '456',
                    productId: '400',
                    productName: 'Item 04',
                    quantity: 32
                }
            ])
        })

        it('should be return items array normalized with other keys', async function () {
            const items = [
                { _id: '123', productId: '100', productName: 'Item 01', price: 10 },
                { _id: '234', productId: '200', productName: 'Item 02', price: 11 },
                { _id: '123', productId: '100', productName: 'Item 01', price: 9 },
            ]

            const res = await deleteDuplicateKeysAndMakeSumInObjectArray(items, {
                sumKey: 'price',
                idKey: 'productId'
            })

            expect(res).to.be.an('array').to.deep.equal([
                {
                    _id: '123',
                    productId: '100',
                    productName: 'Item 01',
                    price: 19
                },
                {
                    _id: '234',
                    productId: '200',
                    productName: 'Item 02',
                    price: 11
                }
            ])
        })

        it('should be return same order items array', async function () {
            const orderItems = [
                { _id: '123', productId: '100', productName: 'Item 01', quantity: 10 },
                { _id: '234', productId: '200', productName: 'Item 02', quantity: 6 },
                { _id: '456', productId: '400', productName: 'Item 04', quantity: 23 }
            ]

            const res = await deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, {
                sumKey: 'quantity',
                idKey: '_id'
            })
            
            expect(res).to.be.an('array').to.deep.equal([
                {
                    _id: '123',
                    productId: '100',
                    productName: 'Item 01',
                    quantity: 10
                },
                {
                    _id: '234',
                    productId: '200',
                    productName: 'Item 02',
                    quantity: 6
                },
                {
                    _id: '456',
                    productId: '400',
                    productName: 'Item 04',
                    quantity: 23
                }
            ])
        })

        it('should be return order items array with one item', async function () {
            const orderItems = [
                { _id: '123', productId: '100', productName: 'Item 01', quantity: 10 }
            ]
            
            const res = await deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, {
                sumKey: 'quantity',
                idKey: '_id'
            })
            
            expect(res).to.be.an('array').to.deep.equal([
                {
                    _id: '123',
                    productId: '100',
                    productName: 'Item 01',
                    quantity: 10
                }
            ])
        })

        it('should be return an error because items is not correct', async function () {
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray()).throws('items is not correct format (empty, null or is not an array)')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(null)).throws('items is not correct format (empty, null or is not an array)')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray([])).throws('items is not correct format (empty, null or is not an array)')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray({ _id: 'test' })).throws('items is not correct format (empty, null or is not an array)')
        })

        it('should be return an error because config is not correct', async function () {
            const orderItems = [
                { _id: '123', productId: '100', productName: 'Item 01', quantity: 10 },
                { _id: '234', productId: '200', productName: 'Item 02', quantity: 6 },
                { _id: '456', productId: '400', productName: 'Item 04', quantity: 23 }
            ]

            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems)).throws('config is not correct format (empty, null or is not an object)')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, null)).throws('config is not correct format (empty, null or is not an object)')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, [])).throws('config is not correct format (empty, null or is not an object)')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, {})).throws('config is not correct format (empty, null or is not an object)')

            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, { sumKey: 'test' })).throws('id key is nil or is not a string')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, { sumKey: 'test', idKey: null })).throws('id key is nil or is not a string')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, { sumKey: 'test', idKey: '' })).throws('id key is nil or is not a string')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, { sumKey: 'test', idKey: ['test'] })).throws('id key is nil or is not a string')

            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, { idKey: 'test' })).throws('sum key is nil or is not a string')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, { idKey: 'test', sumKey: null })).throws('sum key is nil or is not a string')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, { idKey: 'test', sumKey: '' })).throws('sum key is nil or is not a string')
            expect(() => deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, { idKey: 'test', sumKey: ['test'] })).throws('sum key is nil or is not a string')
        })
    })

    describe('verifyOrderExpirationTime', function () {
        it('should be a function', function () {
            expect(verifyOrderExpirationTime).to.be.a('function')
        })

        it('should be return true', async function () {
            const date = moment('28 novembre 2022 14:04').format()
            const test = verifyOrderExpirationTime(date, { unit: 'minutes', timeToCompare: 30 })
            expect(test).eq(true)
        })

        it('should be return false', async function () {
            const date = moment()
            const test = verifyOrderExpirationTime(date, { unit: 'minutes', timeToCompare: 30 })
            expect(test).eq(false)
        })

        it('should be return an error message', async function () {
            const date = moment()
            // config is not correct
            expect(() => verifyOrderExpirationTime(date, {})).throws('config is not correct (nil, empty or is not an object)')
            expect(() => verifyOrderExpirationTime(date, ['test'])).throws('config is not correct (nil, empty or is not an object)')
            expect(() => verifyOrderExpirationTime(date)).throws('config is not correct (nil, empty or is not an object)')
            expect(() => verifyOrderExpirationTime(date, null)).throws('config is not correct (nil, empty or is not an object)')

            // createdAt is null
            expect(() => verifyOrderExpirationTime(null, { unit: 'minutes', timeToCompare: 30 })).throws('createdAt is undefined')

            // unit is not correct
            expect(() => verifyOrderExpirationTime(date, { unit: '', timeToCompare: 30 })).throws('unit is empty, nil or is not a string')
            expect(() => verifyOrderExpirationTime(date, { unit: null, timeToCompare: 30 })).throws('unit is empty, nil or is not a string')
            expect(() => verifyOrderExpirationTime(date, { unit: ['minutes'], timeToCompare: 30 })).throws('unit is empty, nil or is not a string')
            expect(() => verifyOrderExpirationTime(date, { timeToCompare: 30 })).throws('unit is empty, nil or is not a string')

            // timeToCompare is not correct
            expect(() => verifyOrderExpirationTime(date, { unit: 'minutes', timeToCompare: '30' })).throws('timeToCompare is nil or is not a number')
            expect(() => verifyOrderExpirationTime(date, { unit: 'minutes' })).throws('timeToCompare is nil or is not a number')
            expect(() => verifyOrderExpirationTime(date, { unit: 'minutes', timeToCompare: null })).throws('timeToCompare is nil or is not a number')
        })
    })