const { email } = require('./email')
const { password } = require('./password')
const { firstname } = require('./firstname')
const { lastname } = require('./lastname')
const { passwordConfirm } = require('./passwordConfirm')
const { city } = require('./city')
const { zipCode } = require('./zipCode')
const { address } = require('./address')
const { phone } = require('./phone')
const { fax } = require('./fax')
const { country } = require('./country')
const { company } = require('./company')
const { role } = require('./role')
const { accommodation } = require('./accommodation')
const { userType } = require('./userType')
const { socialReason } = require('./socialReason')
const { siret } = require('./siret')
const { capeb } = require('./capeb')
const { activityType } = require('./activityType')
const { accommodationName } = require('./accommodationName')
const { birthdate } = require('./birthdate')
const { birthCountry } = require('./birthCountry')
const { birthCounty } = require('./birthCounty')
const { birthCity } = require('./birthCity')

module.exports = {
  birthCity,
  birthCounty,
  birthCountry,
  birthdate,
  email,
  password,
  firstname,
  lastname,
  passwordConfirm,
  city,
  zipCode,
  address,
  phone,
  fax,
  country,
  company,
  role,
  accommodation,
  userType,
  socialReason,
  siret,
  capeb,
  activityType,
  accommodationName
}