import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitest Workshop",
  description: "Safer development with Vue and Vitest",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Workshop',
        items: [
          { text: 'Introduction', link: '/workshop/000-introduction' },
          { text: 'Testing an existing component', link: '/workshop/001-testing-an-existing-component' },
          { text: 'Extending the Counter', link: '/workshop/002-extending-the-counter' },
          {
            text: 'Test driven development - Todolist',
            items: [
              { text: 'Creating a test file', link: '/workshop/004-tdd-todo-list-creating-test-file' },
              { text: 'Adding dynamic rendering', link: '/workshop/005-tdd-todo-list-dynamic-render' },
              { text: 'Adding items', link: '/workshop/006-tdd-todo-list-adding-items' },
              { text: 'Removing items', link: '/workshop/007-tdd-todo-list-removing-items' },
            ],
          },
          {
            text: 'Testing all the things',
            link: '/workshop/008-testing-all-the-things',
            items: [
              { text: 'Util functions', link: '/workshop/009-utils' },
              { text: 'Composition functions', link: '/workshop/010-composable' },
            ],
          },
          { text: 'Testing Pinia and state', link: '/workshop/011-pinia' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
