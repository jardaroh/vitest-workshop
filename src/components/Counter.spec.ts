import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Counter from './Counter.vue'

test('Counter.vue will render', async () => {
  const wrapper = mount(Counter)
  expect(wrapper.html()).toContain('0')
})
