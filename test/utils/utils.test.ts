import moment from 'moment'

import { validateStringRequestItems, nextValue, deleteDuplicateKeysAndMakeSumInObjectArray, verifyOrderExpirationTime, normalizeObjectData, extractNumberInString } from '../../src/utils/utils'

import { expect } from 'chai'

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

        it('should be return true with days', async function () {
            const date = moment('10 novembre 2022 14:04').format()
            const test = verifyOrderExpirationTime(date, { unit: 'days', timeToCompare: 30 })
            expect(test).eq(true)
        })

        it('should be return false with days', async function () {
            const date = moment()
            const test = verifyOrderExpirationTime(date, { unit: 'days', timeToCompare: 30 })
            expect(test).eq(false)
        })

        it('should be return false with new Date() (unit minutes)', async function () {
            const date = new Date()
            const test = verifyOrderExpirationTime(date, { unit: 'minutes', timeToCompare: 30 })
            expect(test).eq(false)
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

    describe('extractNumberInString', function () {
        it('should be a function', function () {
            expect(extractNumberInString).to.be.a('function')
        })

        it('should be return a number', async function () {
            expect(extractNumberInString('30')).eq(30)
            expect(extractNumberInString('dfgdfg30')).eq(30)
            expect(extractNumberInString('30dfgdfg')).eq(30)
            expect(extractNumberInString('df dfgdfg fg 30 fgd gf')).eq(30)
            expect(extractNumberInString('fgd30dgdfg')).eq(30)
            expect(extractNumberInString('30 gfdg fdg fd')).eq(30)
        })

        it('should be return an error message', async function () {
            // @ts-ignore
            expect(() => extractNumberInString(30)).throws('string is not a string')
            // @ts-ignore
            expect(() => extractNumberInString([])).throws('string is not a string')
            // @ts-ignore
            expect(() => extractNumberInString({ string: 'string' })).throws('string is not a string')
            // @ts-ignore
            expect(() => extractNumberInString()).throws('string is undefined')
            // @ts-ignore
            expect(() => extractNumberInString(null)).throws('string is undefined')
        })
    })

    describe('normalizeObjectData', function () {
        it('should be a function', function () {
            expect(normalizeObjectData).to.be.a('function')
        })

        it('should be return array data normalized', async function () {
            const data = [
                { ProductCode: 'SM', ProductID: 48723, DefaultName: 'Test 01', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48700, DefaultName: 'Test 03', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48710, DefaultName: 'Test 02', Price: 14, ImageID: 78654, Resa: '', Local: '' }
            ]

            const res = await normalizeObjectData(data, {
                pickedKeys: ['ProductID', 'DefaultName', 'Price', 'ImageID', 'ProductCode'],
                setValues: [{ key: 'inStock', value: 20 }, { key: 'tax', value: 10 }],
                replaceKeys: [{ oldKey: 'DefaultName', newKey: 'productName' }]
            })

            expect(res).to.be.an('array').to.deep.equal([
                {
                    productId: 48723,
                    productName: 'Test 01',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM',
                    inStock: 20,
                    tax: 10
                },
                {
                    productId: 48700,
                    productName: 'Test 03',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM',
                    inStock: 20,
                    tax: 10
                },
                {
                    productId: 48710,
                    productName: 'Test 02',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM',
                    inStock: 20,
                    tax: 10
                }
            ])
        })

        it('should be return array data normalized', async function () {
            const data = [
                { ProductCode: 'SM', ProductID: 48723, DefaultName: 'Test 01', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48700, DefaultName: 'Test 03', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48710, DefaultName: 'Test 02', Price: 14, ImageID: 78654, Resa: '', Local: '' }
            ]

            const res = await normalizeObjectData(data, {
                pickedKeys: ['ProductID', 'DefaultName', 'Price', 'ImageID', 'ProductCode'],
                setValues: [{ key: 'inStock', value: 20 }],
            })

            expect(res).to.be.an('array').to.deep.equal([
                {
                    productId: 48723,
                    defaultName: 'Test 01',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM',
                    inStock: 20
                },
                {
                    productId: 48700,
                    defaultName: 'Test 03',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM',
                    inStock: 20
                },
                {
                    productId: 48710,
                    defaultName: 'Test 02',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM',
                    inStock: 20
                }
            ])
        })

        it('should be return array data normalized', async function () {
            const data = [
                { ProductCode: 'SM', ProductID: 48723, DefaultName: 'Test 01', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48700, DefaultName: 'Test 03', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48710, DefaultName: 'Test 02', Price: 14, ImageID: 78654, Resa: '', Local: '' }
            ]

            const res = await normalizeObjectData(data, {
                pickedKeys: ['ProductID', 'DefaultName', 'Price', 'ImageID', 'ProductCode']
            })

            expect(res).to.be.an('array').to.deep.equal([
                {
                    productId: 48723,
                    defaultName: 'Test 01',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM'
                },
                {
                    productId: 48700,
                    defaultName: 'Test 03',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM'
                },
                {
                    productId: 48710,
                    defaultName: 'Test 02',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM'
                }
            ])
        })

        it('should be return array data normalized', async function () {
            const data = [
                { ProductCode: 'SM', ProductID: 48723, DefaultName: 'Test 01', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48700, DefaultName: 'Test 03', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48710, DefaultName: 'Test 02', Price: 14, ImageID: 78654, Resa: '', Local: '' }
            ]

            const res = await normalizeObjectData(data, {
                pickedKeys: ['ProductID', 'DefaultName', 'Price', 'ImageID', 'ProductCode'],
                replaceKeys: [{ oldKey: 'DefaultName', newKey: 'productName' }]
            })

            expect(res).to.be.an('array').to.deep.equal([
                {
                    productId: 48723,
                    productName: 'Test 01',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM'
                },
                {
                    productId: 48700,
                    productName: 'Test 03',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM'
                },
                {
                    productId: 48710,
                    productName: 'Test 02',
                    price: 14,
                    imageId: 78654,
                    productCode: 'SM'
                }
            ])
        })

        it('should be return error message', async function () {
            const data = [
                { ProductCode: 'SM', ProductID: 48723, DefaultName: 'Test 01', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48700, DefaultName: 'Test 03', Price: 14, ImageID: 78654, Resa: '', Local: '' },
                { ProductCode: 'SM', ProductID: 48710, DefaultName: 'Test 02', Price: 14, ImageID: 78654, Resa: '', Local: '' }
            ]

            // data is not correct
            expect(() => normalizeObjectData()).throws('data is not correct (nil, empty or is not an object)')
            expect(() => normalizeObjectData([])).throws('data is not correct (nil, empty or is not an object)')
            expect(() => normalizeObjectData(null)).throws('data is not correct (nil, empty or is not an object)')
            expect(() => normalizeObjectData('test')).throws('data is not correct (nil, empty or is not an object)')

            // config is not correct
            expect(() => normalizeObjectData(data)).throws('config is not correct (nil, empty or is not an object)')
            expect(() => normalizeObjectData(data, {})).throws('config is not correct (nil, empty or is not an object)')
            expect(() => normalizeObjectData(data, null)).throws('config is not correct (nil, empty or is not an object)')
            expect(() => normalizeObjectData(data, 'test')).throws('config is not correct (nil, empty or is not an object)')

            // pickedKeys is not correct
            expect(() => normalizeObjectData(data, { pickedKeys: null })).throws('pickedKeys is not correct (nil, empty or is not an object)')
            expect(() => normalizeObjectData(data, { pickedKeys: 'test' })).throws('pickedKeys is not correct (nil, empty or is not an object)')
            expect(() => normalizeObjectData(data, { pickedKeys: [] })).throws('pickedKeys is not correct (nil, empty or is not an object)')

            // replace is not correct
            expect(() => normalizeObjectData(data, { pickedKeys: ['ProductID'], replaceKeys: ['test'] })).throws('replace is incorrect')
            expect(() => normalizeObjectData(data, { pickedKeys: ['ProductID'], replaceKeys: [{}] })).throws('replace is incorrect')

            // values is not correct
            expect(() => normalizeObjectData(data, { pickedKeys: ['ProductID'], setValues: ['test'] })).throws('values is incorrect')
            expect(() => normalizeObjectData(data, { pickedKeys: ['ProductID'], setValues: [{}] })).throws('values is incorrect')
        })
    })