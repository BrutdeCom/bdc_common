import { createEnum } from '../utils/enumType';

export const OperationStatus = createEnum({
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  ERROR: 'error'
}, 'OperationStatus');