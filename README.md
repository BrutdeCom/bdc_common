CONTENTS OF THIS PACKAGE
---------------------

 * [Introduction](#introduction)
 * [Installation](#installation)
 * [Regex](#regex)
 * [Validator](#validator)
 * [YUP Validator for Formik (InputValidator)](#yup)
 * [Utils](#utils)
 * [Enumerations](#enum)

# <a name="introduction">Introduction</a>

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

This package is npm package in JavaScript for BrutDeCom projects.

# <a name="installation">Installation</a>

For install this package, run `npm i @brutdecom/bdc_common`

# Using

Example for require one part of this package with "Regex" part :

`const { Regex } = require('@brutdecom/bdc_common')`

or 

`import { Regex } from @brutdecom/bdc_common`

# <a name="regex">Regex</a>

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
| password         | 8 characters, 1 lowercase, 1 uppercase, 1 special character, 1 number |
| phone            | Phone and fax number   |
| city             | City (2 characters minimum, not number)    |
| zip              | French zip code (5 numbers) |

# <a name="validator">Validator</a>

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
| `isValidPassword('password')`    | Verify if value is valid password format (8 characters, 1 lowercase, 1 uppercase, 1 special character, 1 number). | `String` parameters ('password') | Return `true` or `false` |
| `isValidSiret('string')`    | Verify if value is valid siret | `String` siret parameters ('12345678998765') | Return `true` or `false` |
| `isValidEnum('string', array)`    | Verify if value is valid enumeration | `String` value parameters ('test'), `array` parameters (Enum.MyEnum) | Return `true` or `false` |

# <a name="yup">YUP Validator for Formik (InputValidator)</a>

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
| `InputValidator.message`    | message (text area in contact form for example) field validation |
| `InputValidator.subject`    | subject (object input in contact form for example) field validation |
| `InputValidator.consent`    | consent (RGPD in contact form for example) field validation |
| `InputValidator.notes`    | notes (text area) field validation |
| `InputValidator.phoneOne`    | Phone field validation for multiple phone fields in form |
| `InputValidator.phoneTwo`    | Phone field validation for multiple phone fields in form |
| `InputValidator.instagram`    | Instagram field validation |
| `InputValidator.facebook`    | Facebook field validation |
| `InputValidator.website`    | Website field validation |
| `InputValidator.linkedin`    | Linkedin field validation |
| `InputValidator.fonction`    | Fonction field validation |

### For My Home Project (but it is possible to use it elsewhere)

| Name       |     Description     | 
| :------------    | :-------------: |
| `InputValidator.question`    | question field validation |
| `InputValidator.questionId`    | question id field validation |
| `InputValidator.category`    | category field validation |
| `InputValidator.introSubTheme`    | introSubTheme field validation |
| `InputValidator.introTheme`    | introTheme field validation |
| `InputValidator.subTheme`    | subTheme field validation |
| `InputValidator.theme`    | theme field validation |
| `InputValidator.type`    | type field validation |
| `InputValidator.answerUnvalidateText`    | answerUnvalidateText field validation |
| `InputValidator.answerValidateText`    | answerValidateText field validation |

# <a name="utils">Utils</a>

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

<details>
  <summary>validateStringRequestItems()</summary>

  ```js
  const verifyIfRequestItemsIsString = Utils.validateStringRequestItems({
          value1: 'test1',
          value2: 'test2',
          value3: 12
  })
  // return false, because one value is not a string

    const verifyIfRequestItemsIsString = Utils.validateStringRequestItems({
          value1: 'test1',
          value2: 'test2'
  })
  // return true, because all values is string
  ```
</details>

<details>
  <summary>deleteDuplicateKeysAndMakeSumInObjectArray()</summary>

  ```js
  const orderItems = [
        { _id: '123', productId: '100', productName: 'Item 01', quantity: 10 },
        { _id: '234', productId: '200', productName: 'Item 02', quantity: 6 },
        { _id: '123', productId: '100', productName: 'Item 01', quantity: 2 },
        { _id: '456', productId: '400', productName: 'Item 04', quantity: 23 },
        { _id: '123', productId: '100', productName: 'Item 01', quantity: 1 },
        { _id: '456', productId: '400', productName: 'Item 04', quantity: 9 }
  ]
  const verifyIfRequestItemsIsString = Utils.deleteDuplicateKeysAndMakeSumInObjectArray(orderItems, {
        sumKey: 'quantity',
        idKey: '_id'
  })

  // Delete items with duplicate "_id", and make sum with quantity keys.
  // verifyIfRequestItemsIsString === [
  //               {
  //                   _id: '123',
  //                   productId: '100',
  //                   productName: 'Item 01',
  //                   quantity: 13
  //               },
  //               {
  //                   _id: '234',
  //                   productId: '200',
  //                   productName: 'Item 02',
  //                   quantity: 6
  //               },
  //               {
  //                   _id: '456',
  //                   productId: '400',
  //                   productName: 'Item 04',
  //                   quantity: 32
  //               }
  //           ]
  ```
</details>

<details>
  <summary>verifyOrderExpirationTime()</summary>

  ```js
  const verifyIfExpired = Utils.verifyOrderExpirationTime(date, { 
      unit: 'minutes', // or hours, days etc. See momentjs doc for units
      timeToCompare: 30
    })
    // return true if date is expired, false if not expired
  ```
</details>

<details>
  <summary>normalizeObjectData()</summary>

  ```js
  const verifyIfExpired = Utils.normalizeObjectData(date, { 
      unit: 'minutes', // or hours, days etc. See momentjs doc for units
      timeToCompare: 30
    })

  // On a un array d'objet en data, que l'on veut normaliser suivant nos normes a nous
  const data = [
    { ProductCode: 'SM', ProductID: 48723, DefaultName: 'Test 01', Price: 14, ImageID: 78654, Resa: '', Local: '' },
    { ProductCode: 'SM', ProductID: 48700, DefaultName: 'Test 03', Price: 14, ImageID: 78654, Resa: '', Local: '' },
    { ProductCode: 'SM', ProductID: 48710, DefaultName: 'Test 02', Price: 14, ImageID: 78654, Resa: '', Local: '' }
 ]

  // Premier cas d'utilisation => on veut simplement passer les keys en camelCase et ne garder que certaines keys
  // Ce cas contient les params minimum, sinon cela ne fonctionnera pas
  const res = await Utils.normalizeObjectData(data, {
    pickedKeys: ['ProductID', 'DefaultName', 'Price', 'ImageID', 'ProductCode'] // les keys que l'on veut garder
  })
  // console.log(res) => 
  // const res = [
  //   { productCode: 'SM', productId: 48723, defaultName: 'Test 01', price: 14, imageId: 78654 },
  //   { productCode: 'SM', productId: 48700, defaultName: 'Test 03', price: 14, imageId: 78654 },
  //   { productCode: 'SM', productId: 48710, defaultName: 'Test 02', price: 14, imageId: 78654 }
  // ]

  // Second cas d'utilisation => même chose que le premier cas, mais maintenant on veux aussi ajouter des valeurs a chaque object dans l'array
  const res = await Utils.normalizeObjectData(data, {
    pickedKeys: ['ProductID', 'DefaultName', 'Price', 'ImageID', 'ProductCode'], // les keys que l'on veut garder
    setValues: [{ key: 'inStock', value: 20 }, { key: 'tax', value: 10 }], // les keys avec les values a ajouter. Attention, cela s'ajoutera a CHAQUE OBJECT DE LA MEME FACON
  })
  // console.log(res) => 
  
  // const res = [
  //   { productCode: 'SM', productId: 48723, defaultName: 'Test 01', price: 14, imageId: 78654, inStock: 20, tax: 10 },
  //   { productCode: 'SM', productId: 48700, defaultName: 'Test 03', price: 14, imageId: 78654, inStock: 20, tax: 10 },
  //   { productCode: 'SM', productId: 48710, defaultName: 'Test 02', price: 14, imageId: 78654, inStock: 20, tax: 10 }
  // ]

  // Troisième cas d'utilisation => même chose que les deux premier cas, mais cette fois on replace aussi une key a la place d'une autre, sans changer la valeur
  const res = await Utils.normalizeObjectData(data, {
    pickedKeys: ['ProductID', 'DefaultName', 'Price', 'ImageID', 'ProductCode'], // les keys que l'on veut garder
    setValues: [{ key: 'inStock', value: 20 }, { key: 'tax', value: 10 }], // les keys avec les values a ajouter. Attention, cela s'ajoutera a CHAQUE OBJECT DE LA MEME FACON
    replaceKeys: [{ oldKey: 'DefaultName', newKey: 'productName' }]
  })
    // console.log(res) => 
    // const res = [
    //   { productCode: 'SM', productId: 48723, productName: 'Test 01', price: 14, imageId: 78654, inStock: 20, tax: 10 },
    //   { productCode: 'SM', productId: 48700, productName: 'Test 03', price: 14, imageId: 78654, inStock: 20, tax: 10 },
    //   { productCode: 'SM', productId: 48710, productName: 'Test 02', price: 14, imageId: 78654, inStock: 20, tax: 10 }
    // ]
  ```
</details>

## <a name="enum">Enumerations</a>

 :warning: :warning: PLEASE USE NEW ENUM VERSION AND NOT OLD VERSION (IS DEPRECATED)  :warning: :warning:

### Create Enum

```js
import { Utils } from '@brutdecom/bdc_common'

const CarBrand = {
  RENAULT: 'renault', 
  PEUGEOT_CITROEN: 'peugeot-citroen', 
  FORD: 'ford'
}

export const CarBrandEnum = Utils.createEnum(CarBrand, 'CarBrand')
```

### Methods

<details>
  <summary>getValues()</summary>

  ```js
  CarBrand.getValues() // return ['renault', 'peugeot-citroen', 'ford']
  ```
  
</details>

<details>
  <summary>next()</summary>

  ```js
  CarBrand.next() // return 'renault'
  CarBrand.next('renault') // return 'peugeot-citroen'
  CarBrand.next('ford') // return 'renault'
  ```
  
</details>

<details>
  <summary>isValid()</summary>

  ```js
  CarBrand.isValid('renault') // return true
  CarBrand.isValid('test') // return false
  ```
  
</details>

<details>
  <summary>getCategories()</summary>

  ```js
  // Update CarBrand with categories for example
  const CarBrand = {
    frenchBrand: {
      RENAULT: 'renault', 
      PEUGEOT_CITROEN: 'peugeot-citroen', 
    },
    americanBrand: {
      FORD: 'ford'
    }
  }

  CarBrand.getCategories() // return ['frenchBrand', 'americanBrand']
  ```
  
</details>

<details>
  <summary>getCategory()</summary>

  ```js
  // Update CarBrand with categories for example
  const CarBrand = {
    frenchBrand: {
      RENAULT: 'renault', 
      PEUGEOT_CITROEN: 'peugeot-citroen', 
    },
    americanBrand: {
      FORD: 'ford'
    }
  }

  CarBrand.getCategory('frenchBrand') // return ['renault', 'peugeot-citroen']
  ```
  
</details>

<details>
  <summary>getIndex()</summary>

  ```js
  CarBrand.getIndex('renault') // return 0
  CarBrand.getIndex('RENAULT') // return 0
  ```
  
</details>

<details>
  <summary>getMetaData()</summary>

  ```js
  // Update CarBrand with categories for example
  const CarBrand = {
      RENAULT: 'renault', 
      PEUGEOT_CITROEN: 'peugeot-citroen',
      FORD: {
        value: 'ford',
        engine: '1.2',
        test: false
      }
    }

  CarBrand.getMetaData(CarBrand.FORD, 'engine') // return '1.2'
  CarBrand.getMetaData(CarBrand.FORD, 'test') // return false
  ``` 
</details>

<details>
  <summary> :warning: OLD VERSION (DEPRECATED)</summary>

### Examples for use enum functions

Enum example for all examples

<details>
  <summary>Enum.HabitatThemeQuestionType()</summary>

```javascript
    const HabitatThemeQuestionType = [
        {
          value: 'theme-service-book',
          text: `Carnet d'entretien`,
          subTheme: [
              {
                value: 'sub-theme-service-book',
                text: `Carnet d'entretien`
              }
          ]
        },
        {
            value: 'theme-framework',
            text: 'Charpente',
            subTheme: [
                {
                  value: 'sub-theme-wood-state',
                  text: 'Etat du bois'
                },
                {
                    value: 'sub-theme-termites',
                    text: 'Termites'
                }
            ]
          },
          {
            value: 'theme-roof',
            text: 'Toiture',
            subTheme: [
                {
                  value: 'sub-theme-roof-tiles',
                  text: 'Les tuiles'
                },
                {
                  value: 'sub-theme-ridge-and-hip',
                  text: 'Faîtage et arêtier'
                }
            ]
          }
    ]
```
</details>

-----------------

For use enum functions

<details>
  <summary>getEnumValues(enum)</summary>

  Get values of the enum

```javascript
const { Enum } = require('@brut2com/myhome-common')
const { Utils } = require('@brutdecom/bdc_common')

// or for REACT

import { Enum } from '@brut2com/myhome-common'
import { Utils } from '@brutdecom/bdc_common'


const enumValues = Utils.getEnumValues(Enum.HabitatThemeQuestionType()) // Look enum example Enum.HabitatThemeQuestionType() above for details
// enumValues = ['theme-service-book', 'theme-framework', 'theme-roof']
```

</details>

<details>
  <summary>getEnumSubTypeValues(enum, key)</summary>

  Get sub type values of the enum

```javascript
const { Enum } = require('@brut2com/myhome-common')
const { Utils } = require('@brutdecom/bdc_common')

// or for REACT

import { Enum } from '@brut2com/myhome-common')
import { Utils } from '@brutdecom/bdc_common')


const enumSubTypeValues = Utils.getEnumSubTypeValues(Enum.HabitatThemeQuestionType(), 'subTheme') // Look enum example Enum.HabitatThemeQuestionType() above for details
// enumSubTypeValues = ['sub-theme-service-book', 'sub-theme-wood-state', 'sub-theme-termites', 'sub-theme-roof-tiles', 'sub-theme-ridge-and-hip']
```

</details>

<details>
  <summary>getEnumSubTypes(enum)</summary>

  Get sub type objects in enum

```javascript
const { Enum } = require('@brut2com/myhome-common')
const { Utils } = require('@brutdecom/bdc_common')

// or for REACT

import { Enum } from '@brut2com/myhome-common')
import { Utils } from '@brutdecom/bdc_common')


const enumSubType = Utils.getEnumSubTypes(Enum.HabitatThemeQuestionType()) // Look enum example Enum.HabitatThemeQuestionType() above for details
// enumSubType = [
//   {
//     value: 'sub-theme-service-book',
//     text: `Carnet d'entretien`
//   },
//   {
//     value: 'sub-theme-wood-state',
//     text: 'Etat du bois'
//   },
//   {
//     value: 'sub-theme-termites',
//     text: 'Termites'
//   },
//   {
//     value: 'sub-theme-roof-tiles',
//     text: 'Les tuiles'
//   },
//   {
//     value: 'sub-theme-ridge-and-hip',
//     text: 'Faîtage et arêtier'
//    }
//   ]
```

</details>

<details>
  <summary>getEnumSubTypeValuesByParent(enum, key, parentKey)</summary>

  Get sub type objects in enum

```javascript
const { Enum } = require('@brut2com/myhome-common')
const { Utils } = require('@brutdecom/bdc_common')

// or for REACT

import { Enum } from '@brut2com/myhome-common')
import { Utils } from '@brutdecom/bdc_common')


const subTypesValuesByParent = Utils.getEnumSubTypeValuesByParent(Enum.HabitatThemeQuestionType(), 'subTheme', 'theme-roof') // Look enum example Enum.HabitatThemeQuestionType() above for details
// subTypesValuesByParent = ['sub-theme-roof-tiles', 'sub-theme-ridge-and-hip']
```
</details>

<details>
  <summary>getEnumSubTypeByParent(enum, key, parentKey)</summary>

  Get sub type objects in enum

```javascript
const { Enum } = require('@brut2com/myhome-common')
const { Utils } = require('@brutdecom/bdc_common')

// or for REACT

import { Enum } from '@brut2com/myhome-common')
import { Utils } from '@brutdecom/bdc_common')


const subTypesByParent = Utils.getEnumSubTypeByParent(Enum.HabitatThemeQuestionType(), 'subTheme', 'theme-roof') // Look enum example Enum.HabitatThemeQuestionType() above for details
// subTypesByParent = [
//     {
//       value: 'sub-theme-roof-tiles',
//       text: 'Les tuiles'
//     },
//     {
//       value: 'sub-theme-ridge-and-hip',
//       text: 'Faîtage et arêtier'
//     }
// ])
```
</details>
</details>