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
```

| Regex Type       |     Informations     |
| :------------    | :-------------: |
| password         | 16 characters, 1 lowercase, 1 uppercase, 1 special character |
| phone            | Phone and fax number   |
| city             | City (2 characters minimum, not number)    |
| zip              | French zip code (5 numbers) |