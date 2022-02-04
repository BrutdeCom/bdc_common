CONTENTS OF THIS PACKAGE
---------------------

 * Introduction
 * Installation
 * Regex
 * Validator
 * YUP Validator for Formik (InputValidator)

# Introduction

This package is npm package in JavaScript for BrutDeCom projects.

# Installation

For install this package, run `npm i @brutdecom/bdc_common`

# Using

Example for require one part of this package with "Regex" part :

`const { Regex } = require('@brutdecom/bdc_common')`

or 

`import { Regex } from @brutdecom/bdc_common`

# Regex

Example for use Regex with this package :

```js
// Require Regex part of this package
const { Regex } = require('@brutdecom/bdc_common')

// or

import { Regex } from '@brutdecom/bdc_common'

// Use password regex
const myConst = Regex.password
// return regex
```

| Regex Type       |     Description     |
| :------------    | :-------------: |
| password         | 16 characters, 1 lowercase, 1 uppercase, 1 special character |
| phone            | Phone and fax number   |
| city             | City (2 characters minimum, not number)    |
| zip              | French zip code (5 numbers) |

# Validator

Validator part is utils for validate various data.
Example for use Validator with this package :

```js
// Require Validator part of this package
const { Validator } = require('@brutdecom/bdc_common')

// or

import { Validator } from '@brutdecom/bdc_common'

// Use isValidString for example
const myConst = Validator.isValidString('string')
// return true

const myConst = Validator.isValidString(14)
// return false
```

| Name       |     Description     | Parameters | return |
| :------------    | :-------------: | :-------------: | :-------------: |
| `isValidString('string')`    | Verify if value is valid string | `String` parameters ('one string') | Return `true` or `false` |
| `isValidEmail('email@test.com')`  | Verify if email is valid format | `String` parameters ('email@test.com') | Return `true` or `false`  |
| `isValidZip('40500')`    | Verify if value is valid zip code format for France. | `String` parameters ('40530') | Return `true` or `false` |
| `isValidCountry('France')`    | Verify if value is valid country format. | `String` parameters ('France') | Return `true` or `false` |
| `isValidAddress('3 rue de la Liberté')`    | Verify if value is valid address format. | `String` parameters ('3 rue de la Liberté') | Return `true` or `false` |
| `isValidCity('Biarritz')`    | Verify if value is valid city format. | `String` parameters ('Biarritz') | Return `true` or `false` |
| `isValidPhone('0625458769')`    | Verify if value is valid phone and fax number format. | `String` parameters ('0625458769') | Return `true` or `false` |
| `isValidLastname('Lastname')`    | Verify if value is valid lastname format. | `String` parameters ('Lastname') | Return `true` or `false` |
| `isValidFirstname('Firstname')`    | Verify if value is valid Firstname format. | `String` parameters ('Firstname') | Return `true` or `false` |
| `isValidPassword('password')`    | Verify if value is valid password format (16 characters, 1 lowercase, 1 uppercase, 1 special character). | `String` parameters ('password') | Return `true` or `false` |
| `isValidSiret('string')`    | Verify if value is valid siret | `String` siret parameters ('12345678998765') | Return `true` or `false` |
| `isValidEnum('string', array)`    | Verify if value is valid enumeration | `String` value parameters ('test'), `array` parameters (Enum.MyEnum) | Return `true` or `false` |

# YUP Validator for Formik (InputValidator)

InputValidator part is utils for validate data in Formik form (validationSchemas parameter).
Validate data, and display matches error in frontend (based on YUP package)

Example for use InputValidator with this package :

```js
// Require InputValidator part of this package
const { InputValidator, FormValidator } = require('@brutdecom/bdc_common')

// or

import { InputValidator, FormValidator } from '@brutdecom/bdc_common'

// My form contain two fields, "email" and "password" for auth. I want validate field data, use InputValidator with FormValidator.mergedYupSchemas
// This variable contain my validationSchema object
// mergedYupSchemas is utils function for grouped multiple validator in schema object, is required
const validationSchema = FormValidator.mergedYupSchemas(InputValidator.email, InputValidator.password)

// After, just passed validationSchema in Form

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      action(values)
    }
  })

  ......
```

| Name       |     Description     | 
| :------------    | :-------------: |
| `InputValidator.email`    | Verify if value is valid email |
| `InputValidator.password`    | Verify if value is valid password |
| `InputValidator.firstname`    | Firstname field validation |
| `InputValidator.lastname`    | Lastname field validation |
| `InputValidator.passwordConfirm`    | passwordConfirm field validation, for verify identical password in form |
| `InputValidator.city`    | City field validation |
| `InputValidator.zipCode`    | zipCode field validation |
| `InputValidator.address`    | address field validation |
| `InputValidator.phone`    | Phone field validation |
| `InputValidator.fax`    | Fax field validation |
| `InputValidator.country`    | Country field validation |
| `InputValidator.company`    | Company field validation |
| `InputValidator.role`    | Role field validation |
| `InputValidator.accommodation`    | Accommodation field validation |
| `InputValidator.userType`    | userType field validation |
| `InputValidator.socialReason`    | enterprise socialReason field validation |
| `InputValidator.siret`    | siret field validation |
| `InputValidator.capeb`    | capeb field validation |
| `InputValidator.activityType`    | activityType field validation |
| `InputValidator.accommodationName`    | accommodationName field validation |
| `InputValidator.birthdate`    | birthdate field validation |
| `InputValidator.birthCountry`    | birthCountry field validation |
| `InputValidator.birthCounty`    | birthCounty field validation |
| `InputValidator.birthCity`    | birthCity field validation |

### For My Home Project (but it is possible to use it elsewhere)

| Name       |     Description     | 
| :------------    | :-------------: |
| `InputValidator.question`    | question field validation |
| `InputValidator.category`    | category field validation |
| `InputValidator.introSubTheme`    | introSubTheme field validation |
| `InputValidator.introTheme`    | introTheme field validation |
| `InputValidator.subTheme`    | subTheme field validation |
| `InputValidator.theme`    | theme field validation |
| `InputValidator.type`    | type field validation |
| `InputValidator.answerUnvalidateText`    | answerUnvalidateText field validation |
| `InputValidator.answerValidateText`    | answerValidateText field validation |

# Utils

Example for use Utils with this package :

```js
// Require Utils part of this package
const { Utils } = require('@brutdecom/bdc_common')

// or

import { Utils } from '@brutdecom/bdc_common'

// Use utils function
const myConst = Utils.myUtilsFunction()
// return ...
```

| Name       |     Description     | Parameters | return |
| :------------    | :-------------: | :-------------: | :-------------: |
| `validateStringRequestItems(body)`    | Get if all values in request body is string | req.body parameters (object) | Return true if is ok, else return false |


## Enum Part

| Name       |     Description     | Parameters | return |
| :------------    | :-------------: | :-------------: | :-------------: |
| `getEnumValues(enum)`    | Get values of the enum | Enum parameters (Enum.MyEnumType) | Return an array with enum values |
| `getEnumSubTypeValues(enum, key)`  | Get values of the sub type in enum | Enum parameters (Enum.MyEnumType), `String` with sub type key | Return an array with enum sub type values  |


