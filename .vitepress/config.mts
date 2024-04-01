import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  base: '/appweb-exer16/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
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
