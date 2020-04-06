---
title: Laziness - Streams and thunks in JavaScript
date: "2020-04-05"
description: Learn by doing. Interactive excercises to help you grasp streams and thunks.
---

Thunks and streams are not scary, they are just a few of the fancy words that programmers like to throw around. Learning the essence of thunks and streams is really not that complicated and you might have even used this concept without realizing it previously (have you ever added an infinite scroll? that's implemented with thunks!).

Read the text, do the excersises, and you'll have a basic understanding in no time. Streams and thunks are nice tools to have in your programming toolbox plus you'll be able to understand your co-workers when they are trying to be fancy (and libraries such as redux-thunk).

Personally I struggle to understand programming concepts by just reading a blog post or watching a video, I need to implement it by myself to come to true understanding so I added a few smallish coding challenges for you to do as you read along with the text.

It's as Confucius says:

> I hear and I forget. I see and I remember. I do and I understand.

### "Thunk the expression"

When you speak with another programmer, they might say "Thunk the expression". What does this mean? Thunks are a way to avoid unneccessary computations. An unnecessary computation could be a function that is called when it's not needed, with thunks you can delay the computation until it's actually needed. This is known as **lazy evaluation**.

So a thunk is an expression that has not been evaluated(computed/executed) yet -- a thunk is represented by a function that has been declared. When this function is called the function then it's evaluated. Functions are lazy, they are only evaluated once they are called.

**What's an expression?**

Expression is a statement of logic. E.g: a function declaration:

```javascript
const add = (a, b) => a + b
```

<br />

**What's evaluation?**

Evaluation is when a piece of code is executed. The add function above has been declared -- but it has not been executed yet. To evaluate or to execute the function, we call it:

```javascript
add(39, 3)
```

### Streams:

With a stream you can represent the infinite, a stream can generate an infinite sequence of values. Because streams can generate an infinite amount of values you cannot just call a function and "create" all the infinite values at once, that would cause our program to run out of memory. So the values need to be created bit by bit.

So how do you represent the infinite?

This is where thunks come into play, by using thunks that are executed on demand you can create the infinite bit by bit.

A stream can be represented by a function that returns a pair: a value and a thunk that will generate the next value (it's also possible to use generators if you're into that kind of stuff):

```
// thunkToGenerateNextValue is a function declaration
[value, thunkToGenerateNextValue]
```

<br />

**What's a pair?**

A pair is a datastructure that holds two items. JavaScript doesn't have an innate pair datastructure so we can simply use an array with two items to make our own pair datastructure.

```javascript
const pair = [value1, value2]
// we can access pair values with [0] and [1]
```

<br />

Here is a stream that generates an infinite sequence of ones:

```javascript
const streamOfOnes = () => [1, streamOfOnes]

// usage:
streamOfOnes()[0] // 1
streamOfOnes()[1]()[0] // 1
streamOfOnes()[1]()[1]()[0] // 1
//...amazing, we can generate infinite 1's on demand / lazily!
```

<br/>

Stream of ones returns the value 1 and a thunk to generate the next value (and the next thunk that can generate the next value... and so forth until infinity).

The thunk that generates the next value in the stream is the streamOfOnes function declaration itself, that we recursively return and to get the next value of our infinite stream we just call this thunk.

Here is another one: a stream that counts from 1:

```javascript
const countStream = () => {
  // takes the current count and increments it by one
  const counterHelper = count => [count, () => counterHelper(count + 1)]

  // start counting from 1
  return counterHelper(1)
}

console.log(countStream()[0]) // 1
console.log(countStream()[1]()[0]) // 2
console.log(countStream()[1]()[1]()[0]) // 3
```

<br />

Your turn! Complete the function below and once it passes all tests move on to the next:

<iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@oskarahlroth/Thunks?lite=true"></iframe>

### Let's get functional

Good job so far! 🎉

This challenge is more challenging 😉. Currently to get values from a stream we are accessing the thunk in the array and calling it repeteadly, which is hard to read and hard to follow.

e.g:

```javascript
// this is hard to follow:
countStream()[1]()[1]()[0]
```

<br />

What if there was an easier way? and we could just take the values we need.

```javascript
take(countStream, 5) // [1, 2, 3, 4, 5]
```

<br/>

You're up again captain!

<iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@oskarahlroth/Take?lite=true"></iframe>

Awesome! 🚀 Hope you had fun, want more interactive coding challenges?
Subscribe to my newsletter below:
