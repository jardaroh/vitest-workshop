---
title: Testing util functions
---

# Testing utility functions

Utility functions are functions that are designed to be reused
across the application and isn't tied to a specific component
or business logic. They are usually pure functions that take
some input and return some output, this makes utility functions
very easy to unit test.

## Creating our test file and utility function

Create a file at `src/utils/math.spec.ts` and the
`src/utils/math.ts` file. We will start by writing a test for
the `add` function.

Open up `src/utils/math.spec.ts` and add the following code:

```ts
import { test, expect } from 'vitest' // [!code focus]

import { add } from './math' // [!code focus]

test('utils/math.ts add should add two numbers', () => { // [!code focus]
  expect(add(1, 2)).toBe(3) // [!code focus]
}) // [!code focus]
```

And then open up `src/utils/math.ts` and add the following code:

```ts
export function add(a: number, b: number): number { // [!code focus]
  return a + b // [!code focus]
} // [!code focus]
```

Of course this is a very simple example, but it shows how we can
test a simple utility function. Note that there was no need to
use the `mount` function from `@vue/test-utils` since we are
not testing a component.
