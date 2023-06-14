---
title: Test driven development - Todo list
---

# Test driven development - Todo list

In this section we will build a todo list application using
[Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development).
We will start by writing some tests, and then we will make
them pass.


## Creating our test file

First we will create a `TodoList.spec.ts` file in the
`src/components` directory. This is where we will write
our tests.

Create the test file and add the following code:

```ts
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TodoList from './TodoList.vue'

test('TodoList.vue should render', async () => {
  const wrapper = mount(TodoList)
  expect(wrapper.html()).toContain('Todo')
})
```

If you followed these steps exactly and saved the `TodoList.spec.ts` file
while leaving your test runner running, you should see the following output:

```
Serialized Error: {
  "code": "ERR_MODULE_NOT_FOUND",
}
```

This is because we haven't created the `TodoList.vue` file yet. So create
the `TodoList.vue` file in the `src/components` directory and add the
following code:

## Creating our TodoList component

```vue
<script lang="ts" setup>

</script>

<template>
  <div>
    <h1>Todo List</h1>
  </div>
</template>
```

And the error should be gone and your test should pass.

::: info
You may need to either make a small change in `TodoList.spec.ts` or restart
the test runner for the test to pass. This is because the test runner
reloads on file changes and sometimes it doesn't pick up the changes
correctly, for example when adding files as we just did.
:::
 