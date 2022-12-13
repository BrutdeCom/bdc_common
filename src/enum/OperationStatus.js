const { createEnum } = require('../utils/enumType')

const OperationStatus = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  ERROR: 'error'
}

module.exports = createEnum(OperationStatus, 'OperationStatus')