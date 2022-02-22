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
const { category } = require('./category')
const { theme } = require('./theme')
const { introTheme } = require('./introTheme')
const { subTheme } = require('./subTheme')
const { introSubTheme } = require('./introSubTheme')
const { type } = require('./type')
const { answerValidateText } = require('./answerValidateText')
const { answerUnvalidateText } = require('./answerUnvalidateText')
const { question } = require('./question')
const { questionId } = require('./questionId')
const { answerValidateTextFindOutMore } = require('./answerValidateTextFindOutMore')
const { answerUnvalidateTextFindOutMore } = require('./answerUnvalidateTextFindOutMore')

module.exports = {
  answerUnvalidateTextFindOutMore,
  answerValidateTextFindOutMore,
  questionId,
  question,
  answerUnvalidateText,
  answerValidateText,
  type,
  introSubTheme,
  subTheme,
  introTheme,
  theme,
  category,
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