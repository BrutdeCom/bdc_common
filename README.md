CONTENTS OF THIS PACKAGE
---------------------

 * Introduction
 * Installation
 * Regex

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

// Use isValidString for example
const myConst = Validator.isValidString('string')
// return true
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