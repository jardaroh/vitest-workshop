---
title: Test driven development - Todo list - Adding items
---

# Test driven development - Todo list - Adding items

In this section we will add the ability to add items to our
todo list.

First let's keep with the TDD approach and write a test for
this feature.

```ts
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TodoList from './TodoList.vue'

test('TodoList.vue should render', async () => {
  const wrapper = mount(TodoList)
  expect(wrapper.html()).toContain('Todo')
})

test('TodoList.vue should render a list of items', async () => {
  const wrapper = mount(TodoList)
  expect(wrapper.findAll('li').map((li) => li.text()))
    .toEqual(['foo', 'bar', 'baz'])
})

test('TodoList.vue should add an item on user input', async () => { // [!code focus]
  const wrapper = mount(TodoList) // [!code focus]
  const input = wrapper.find('input') // [!code focus]
  const button = wrapper.find('button') // [!code focus]
  await input.setValue('qux') // [!code focus]
  await button.trigger('click') // [!code focus]
  expect(wrapper.findAll('li').map((li) => li.text())) // [!code focus]
    .toEqual(['foo', 'bar', 'baz', 'qux']) // [!code focus]
}) // [!code focus]
```

This test will fail because we are not rendering an input element.
So let's add it to our component, and also add a button to submit.

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const items = ref(['foo', 'bar', 'baz'])
const inputValue = ref('') // [!code focus]

const addItem = () => items.value = [...items.value, inputValue.value] // [!code focus]
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="inputValue" /> // [!code focus]
    <button @click="addItem">Add</button> // [!code focus]
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>
```

Again, our tests should now run and pass.
