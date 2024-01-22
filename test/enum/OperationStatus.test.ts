import { OperationStatus } from '../../src/enum'
import { expect } from ('chai')

describe('OperationStatus', function () {
  it('Valid the order - Key to avoid permission ecalation', function () {
    const values = OperationStatus.getValues()
    expect(values).has.nested.property('[0]').eq('not-started')
    expect(values).has.nested.property('[1]').eq('in-progress')
    expect(values).has.nested.property('[2]').eq('completed')
    expect(values).has.nested.property('[3]').eq('error')
  })
})