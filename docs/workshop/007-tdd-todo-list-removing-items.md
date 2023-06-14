---
title: Test driven development - Todo list - Removing items
---

# Test driven development - Todo list - Removing items

Up until now we have been rendering items and can add new items
to our todo list. Now we will add the ability to remove items.

Let's start by writing a test for this feature.

```ts
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

...

test('TodoList.vue should add an item on user input', async () => {
  const wrapper = mount(TodoList)
  const input = wrapper.find('input')
  const button = wrapper.find('button')
  await input.setValue('qux')
  await button.trigger('click')
  expect(wrapper.findAll('li').map((li) => li.text()))
    .toEqual(['foo', 'bar', 'baz', 'qux'])
})

test('TodoList.vue should remove an item from the list', async () => { // [!code focus]
  const wrapper = mount(TodoList) // [!code focus]
  const button = wrapper.find('li:nth-child(2) > button') // [!code focus]
  await button.trigger('click') // [!code focus]
  expect(wrapper.findAll('li').map((li) => li.text())) // [!code focus]
    .toEqual(['foo', 'baz']) // [!code focus]
}) // [!code focus]
```

This test will fail because we are not rendering a remove button
on our items just yet. So let's add it to our component.

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const items = ref(['foo', 'bar', 'baz'])
const inputValue = ref('')

const addItem = () => items.value = [...items.value, inputValue.value]
const removeItem = (value) => items.value = items.value.filter(item => item !== value) // [!code focus]
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="inputValue" />
    <button @click="addItem">Add</button>
    <ul>
      <li v-for="item in items"> // [!code focus]
        {{ item }}&nbsp; // [!code focus]
        <button @click="() => removeItem(item)">Remove</button> // [!code focus]
      </li> // [!code focus]
    </ul>
  </div>
</template>
```

But with this change, our other tests will fail as we just introduced
a new button inside each item of our list. So let's fix that.

Change the selector inside each `findAll` to be `li > span`

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
  expect(wrapper.findAll('li > span').map((li) => li.text())) // [!code focus]
    .toEqual(['foo', 'bar', 'baz'])
})

test('TodoList.vue should add an item on user input', async () => {
  const wrapper = mount(TodoList)
  const input = wrapper.find('input')
  const button = wrapper.find('button')
  await input.setValue('qux')
  await button.trigger('click')
  expect(wrapper.findAll('li > span').map((li) => li.text())) // [!code focus]
    .toEqual(['foo', 'bar', 'baz', 'qux'])
})

test('TodoList.vue should remove an item from the list', async () => {
  const wrapper = mount(TodoList)
  const button = wrapper.find('li:nth-child(2) > button')
  await button.trigger('click')
  expect(wrapper.findAll('li > span').map((li) => li.text())) // [!code focus]
    .toEqual(['foo', 'baz'])
})
```

And then we can wrap the item text inside a `span` tag.

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const items = ref(['foo', 'bar', 'baz'])
const inputValue = ref('')

const addItem = () => items.value = [...items.value, inputValue.value]
const removeItem = (value) => items.value = items.value.filter(item => item !== value)
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="inputValue" />
    <button @click="addItem">Add</button>
    <ul>
      <li v-for="item in items">
        <span>{{ item }}</span>&nbsp; // [!code focus]
        <button @click="() => removeItem(item)">Remove</button>
      </li>
    </ul>
  </div>
</template>
```

And now all our tests should run green.