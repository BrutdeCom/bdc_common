const Yup = require('yup')

const activityType = Yup.object({
  activityType: Yup.string(),
})

module.exports = {
  activityType
}