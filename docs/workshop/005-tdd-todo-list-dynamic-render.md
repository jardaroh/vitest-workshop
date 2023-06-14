---
title: TDD Todo List Dynamic Rendering
---

# TDD Todo List Dynamic Rendering

Our `TodoList.vue` component is only rendering a static string
so we should start by making it render a list of items.

Let's first add a test that describe the expected behavior.

```ts
import {test, expect, expectTypeOf} from 'vitest'
import {mount} from '@vue/test-utils'

import TodoList from './TodoList.vue'

test('TodoList.vue should render', async () => {
  const wrapper = mount(TodoList)
  expect(wrapper.html()).toContain('Todo')
})

test('TodoList.vue should render a list of items', async () => { // [!code focus]
  const wrapper = mount(TodoList) // [!code focus]
  expect(wrapper.findAll('li').map((li) => li.text())) // [!code focus]
    .toEqual(['foo', 'bar', 'baz']) // [!code focus]
}) // [!code focus]
```

This test will fail because we are not rendering a list of items
but we can easily add this behavior.

```vue
<script lang="ts" setup>
import { ref } from 'vue' // [!code focus]

const items = ref(['foo', 'bar', 'baz']) // [!code focus]
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <ul> // [!code focus]
      <li v-for="item in items">{{ item }}</li> // [!code focus]
    </ul> // [!code focus]
  </div>
</template>
```

Now all the tests should run and we shouldn't have any
warnings.
