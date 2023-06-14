---
title: Testing Pinia stores and state
---

# Testing Pinia stores and state

In this workshop we assume the use of Vue 3, if you aren't too
interested in the details of testing state management in Vue 3
with Pinia you can skip this section. However, we highly
recommend that you follow along.

## Pinia

Pinia is a third party state management library for Vue 3 that
largely replaces the previous Vuex library. Pinia aims to be
simplistic, modular and powerful while still being easy to use.

This workshop is already set up with Pinia, so you don't have
to do anything to get started. However testing a Pinia store
is a bit different from testing a component, utility function
or a generic composition function. We will go over the
requirements for testing a Pinia store and how to test it.

## The store

Create a file at `src/stores/messages.ts` and add the following
code:

```ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export default defineStore('messages', () => {
  const messages = ref<string[]>([])

  const messageCount = computed(() => messages.value.length)

  return {
    messages,
    messageCount,
  }
})
```

This is a simple store that holds a list of strings in
`messages` and a computed property `messageCount` that returns
the length of the `messages` array.

## Testing the store

Now create a file at `src/stores/messages.spec.ts` and add the
following code:

```ts
import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import { describe, it, beforeEach, expect } from 'vitest'

import useMessages from './messages'

describe('stores/messages.ts', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have a messageCount of 0 initially', () => {
    const { messageCount } = storeToRefs(useMessages())

    expect(messageCount.value).toEqual(0)
  })

  it('should increment the messageCount when a message is added', () => {
    const { messages, messageCount } = storeToRefs(useMessages())

    messages.value = ['messageCount should be 1']

    expect(messageCount.value).toEqual(1)
  })
})
```

The first thing that should jump out at you is that we are
using a `describe` and `it` function instead of `test`. This
is because we also want to use the `beforeEach` function to
set up the Pinia store for each test. The `describe` function
allows us to set up a test suite and the `it` is really just
an alias for `test` but it is more common to see `it` used in
combination with `describe`.

The `beforeEach` function is a function that is run before
each test in the test suite. This is where we set up the
Pinia store for each test. We use the `setActivePinia` function
to set the active Pinia instance to a new instance of Pinia
created with the `createPinia` function. This is the same
instance that is used in the application.

And that's it! We can now test our Pinia store just like any
other function.
