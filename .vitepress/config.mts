import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Revue de codes',
        items: [
          { text: 'Simon Desjardins', link: '/simon-desjardins' },
          { text: 'Ilann Brodl', link: '/ilann-brodl' }
        ]
      }
    ]
  }
})
