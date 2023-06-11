---
title: Testing an existing component
---

<script setup>
import Counter from '../../src/components/Counter.vue'
</script>

# Testing an existing component
As a soft introduction we will start by testing an existing component.
If you open up `src/components/Counter.vue` you will see a simple counter
component and along side a test file `src/components/Counter.spec.js`.

This is what the component looks like when used on a page:
<Counter />

The test file contains a single test suite that is empty. We will start by
adding a test for the `Counter` component.

## Explaining the test setup
When testing components you can use either a node environment or a browser.
For speed and simplicity we will use the node environment, however, if you
need to test for event handling, cookies or other browser specific features,
you can use the browser environment, but this requires a different setup that
we won't cover in this workshop.

## The test, before we begin
First we import the `test` and `expect` functions from `vitest`, and the `mount`
function from `@vue/test-utils`. We will use the `mount` function to mount the
`Counter` component. This will give us a `wrapper` object that we can use to
interact with the component.

```ts
import { test, expect } from 'vitest' // [!code focus]
import { mount } from '@vue/test-utils' // [!code focus]

import Counter from './Counter.vue'

test('Counter.vue will render', async () => {
  const wrapper = mount(Counter)
  expect(wrapper.html()).toContain('0')
})
```

Next we import the `Counter` component.

```ts
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Counter from './Counter.vue' // [!code focus]

test('Counter.vue will render', async () => {
  const wrapper = mount(Counter)
  expect(wrapper.html()).toContain('0')
})
```

And lastly we define the test we want to run. Here we use the `test` function to
define a single test to be executed. This test will simply mount the `Counter`
component and expect the html to contain the number `0`.

```ts
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Counter from './Counter.vue'

test('Counter.vue will render', async () => { // [!code focus]
  const wrapper = mount(Counter) // [!code focus]
  expect(wrapper.html()).toContain('0') // [!code focus]
}) // [!code focus]
```

## Running the test
To run the test we need to open a terminal and run the following command:

::: info
Make sure you are within the repository folder when running the command.
:::

```sh
npm run test
```

The expected output should be:
```
 DEV  v0.32.0 /Users/jardarohrn/Documents/repos/vitest-workshop

 ✓ src/components/Counter.spec.ts (1)

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  17:44:37
   Duration  409ms (transform 31ms, setup 0ms, collect 53ms, tests 9ms, environment 196ms, prepare 44ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
