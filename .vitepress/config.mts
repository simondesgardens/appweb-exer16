import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Revue de code', link: '/ilann-brodl' }
    ],

    sidebar: [
      {
        text: 'Revue de code',
        items: [
          { text: 'Ilann Brodl', link: '/ilann-brodl' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
