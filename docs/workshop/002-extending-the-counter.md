---
title: Extending the Counter component
---

<script setup>
import Counter from '../../src/components/Counter.vue'
</script>

# Extending the Counter component
If you attempt to click the buttons on the `Counter` component
below, you will see that they aren't working. This is because
the `Counter` component is missing some functionality.

<Counter />

Let's take a look at the `Counter` component and see what we
need to do to make it work.

```vue
<script lang="ts" setup>

</script>

<template>
  <div>
    <button>-</button>
    <span>0</span>
    <button>+</button>
  </div>
</template>

...
```

First we can see that the component's setup block is empty
and secondly we can see that the buttons don't have any
click handlers as well as the span doesn't have a dynamic
value.

Let's start by adding a `count` variable to the setup block
and initialize it to `0`.
We also render the `count` variable in the span.
```vue
<script lang="ts" setup>
import { ref } from 'vue' // [!code focus]

const count = ref(0) // [!code focus]
</script>

<template>
  <div>
    <button>-</button>
    <span>{{ count }}</span> // [!code focus]
    <button>+</button>
  </div>
</template>
```

Now we add the click handlers to our buttons
```vue
<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>
```

And that's it. Now the buttons should work. But we need to
add a test to make sure that the component works as expected.

Open up `src/components/Counter.spec.ts` and add the following

```ts
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Counter from './Counter.vue'

test('Counter.vue will render', async () => {
  const wrapper = mount(Counter)
  expect(wrapper.html()).toContain('0')
})

test('Counter.vue will increment', async () => { // [!code focus]
  const wrapper = mount(Counter) // [!code focus]
  const button = wrapper.find('button:last-child') // [!code focus]
  await button.trigger('click') // [!code focus]
  expect(wrapper.html()).toContain('1') // [!code focus]
}) // [!code focus]
```

And then we can also add a test for the decrement button

```ts
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Counter from './Counter.vue'

test('Counter.vue will render', async () => {
  const wrapper = mount(Counter)
  expect(wrapper.html()).toContain('0')
})

test('Counter.vue will increment', async () => {
  const wrapper = mount(Counter)
  const button = wrapper.find('button:last-child')
  await button.trigger('click')
  expect(wrapper.html()).toContain('1')
})

test('Counter.vue will decrement', async () => { // [!code focus]
  const wrapper = mount(Counter) // [!code focus]
  const button = wrapper.find('button:first-child') // [!code focus]
  await button.trigger('click') // [!code focus]
  expect(wrapper.html()).toContain('-1') // [!code focus]
}) // [!code focus]
```

::: info
As you may have noticed, the tests are executed in isolation
from each other. This means that the `count` variable is
local to the component instance in each test.
:::
