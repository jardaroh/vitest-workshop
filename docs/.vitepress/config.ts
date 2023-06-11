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
          { text: 'Extending the Counter', link: '/workshop/002-extending-the-counter' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
