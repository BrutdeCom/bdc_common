const _ = require('lodash')
const { expect } = require('chai')

const AllEnums = require('../../src/enum/index')

describe('enum/index.js', function () {
  it('Valid the enum name consistency with export name', function () {
    _.each(AllEnums, (Enum, key) => {
      expect(key).eq(Enum.getName())
    })
  })
})