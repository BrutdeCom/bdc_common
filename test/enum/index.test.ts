import _ from 'lodash'
import { expect } from 'chai'

const AllEnums = require('../../src/enum/index')

describe('enum/index.js', function () {
  it('Valid the enum name consistency with export name', function () {
    _.each(AllEnums, (Enum, key) => {
      expect(key).eq(Enum.getName())
    })
  })
})