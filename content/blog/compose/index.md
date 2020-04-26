---
title: Function composition
date: "2020-04-25"
description: Combine your functions like lego pieces.
---

Compose is a handy concept from functional programming that will make your code elegant. With compose your code will be a pleasure to read for the other developers on your team (and you in the future). All that compose does is that it combines (or... composes) multiple functions into one function.

To be able to compose your functions you want them to be tiny and to do one thing (single responsibility). If your program has functions like this, it will then be easy for you pick the functions doing the data transformations you need and put them together however you need.

The key requirement to compose functions is that:

- The input and output of the functions need to match. Data will flow through all the composed functions from left to right and the output of the first function must match the input of the second function... and so on.

```javascript
// imaginary functions that take one string as input
// and return one string as output
const funkyGreeting = compose(addGreeting, capitalizeFirstChar, removeVowels)

funkyGreeting("oskar")
// 'oskar' input to removeVowels
// --> output 'skr' input to capitalizeFirstChar
// --> output 'Skr' input to addGreeting
// --> final function output = 'Howdy Skr!'
```

<br />

Here is the non-composed version of funkyGreeting (clearly not as elegant 😉).

```javascript
const funkyGreeting => str = addGreeting(capitalizeFirstChar(removeVowels(str)))
```

<br />

A slightly more practical example would be to have various validation functions that you can then combine as you see fit for e.g. name validation:

```javascript
// could be in a completely separate file
const isNotEmpty = ({ str, errors }) => {
  if (!str.length) {
    return { str, errors: [...errors, "Cannot be empty"] }
  }
  return { str, errors }
}

const isUpperCase = ({ str, errors }) => {
  if (!/^[A-Z]*$/.test(str)) {
    return { str, errors: [...errors, "Has to be uppercase"] }
  }
  return { str, errors }
}

const isNotTooLong = ({ str, errors }) => {
  const MAX_LENGTH = 15
  if (str.length > MAX_LENGTH) {
    return { str, errors: [...errors, `Cannot be more than ${MAX_LENGTH}`] }
  }
  return { str, errors }
}

// import { isNotTooLong, isUpperCase, isNotEmpty } from './validations.js

const validateName = compose(isNotTooLong, isUpperCase, isNotEmpty)

validateName({ str: "JERRY", errors: [] }) // { str: 'JERRY', errors: [] }
validateName({ str: "Kosmo", errors: [] }) // { str: 'Kosmo', errors: [ 'Has to be uppercase' ] }
// { str: 'George Costanza, Lord of the Idiots', errors: [ 'Has to be uppercase', 'Cannot be more tha 15' ]}
validateName({ str: "George Costanza, Lord of the Idiots", errors: [] })
```

<br />

It's your turn now. To really solidify your understanding of compose complete the empty compose function below and make it pass the tests.

<iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@oskarahlroth/ComposeAllTheFunctions?lite=true"></iframe>
