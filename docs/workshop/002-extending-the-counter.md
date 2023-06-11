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

Now we add the click handlers to out buttons
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
