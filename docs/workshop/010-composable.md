---
title: Testing composable functions
---

# Testing composable functions

Composable functions are functions that are designed to be reused and isn't tied to a specific component,
but they are normally closer to the business logic than utility functions.

A composable function follow a specific pattern, that allows it to import and reuse other composable
functions. They are also usually very easy to test just like utility functions but because of the
composition pattern we will take a closer look at how to test them.

## Creating our test file and composable function

Create a file at `src/composables/useCounter.spec.ts` and the `src/composables/useCounter.ts` file.
We will start by writing a test for the `useCounter` composition function.

```ts
import { test, expect } from 'vitest' // [!code focus]

import useCounter from './useCounter' // [!code focus]

test('composables/useCounter.ts useCounter should return a counter object', () => { // [!code focus]
  const { count } = useCounter() // [!code focus]

  expect(count.value).toEqual(0) // [!code focus]
}) // [!code focus]
```

And then open up `src/composables/useCounter.ts` and add the following code:

```ts
import { ref } from 'vue' // [!code focus]

export default function useCounter() { // [!code focus]
  const count = ref(0) // [!code focus]

  function increment() { // [!code focus]
    count.value++ // [!code focus]
  } // [!code focus]

  function decrement() { // [!code focus]
    count.value-- // [!code focus]
  } // [!code focus]

  return { // [!code focus]
    count, // [!code focus]
    increment, // [!code focus]
    decrement, // [!code focus]
  } // [!code focus]
} // [!code focus]
```

Of course, we should also test the `increment` and `decrement` functions. Add the following code to
`src/composables/useCounter.spec.ts`:

```ts
import { test, expect } from 'vitest'

import useCounter from './useCounter'

test('composables/useCounter.ts useCounter should return a counter object', () => {
  const { count } = useCounter()

  expect(count.value).toEqual(0)
})

test('composables/useCounter.ts increment should increment the count', () => { // [!code focus]
  const { count, increment } = useCounter() // [!code focus]

  increment() // [!code focus]

  expect(count.value).toEqual(1) // [!code focus]
}) // [!code focus]

test('composables/useCounter.ts decrement should decrement the count', () => { // [!code focus]
  const { count, decrement } = useCounter() // [!code focus]

  decrement() // [!code focus]

  expect(count.value).toEqual(-1) // [!code focus]
}) // [!code focus]
```
