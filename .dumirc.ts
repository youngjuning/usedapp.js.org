import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://usedapp.io/img/favicon.svg'],
  autoAlias: false,
  themeConfig: {
    name: 'useDapp',
    logo: 'https://usedapp.io/img/favicon.svg',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/youngjuning/usedapp.js.org',
      twitter: 'https://twitter.com/luozhu2021'
    },
    hd: { rules: [] },
  },
  theme: {
    '@c-primary': '#13aa52',
  },
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  analytics: {
    ga_v2: 'G-QT3BHRCWSH',
  },
  sitemap: {
    hostname: 'https://usedapp.js.org',
  },
  exportStatic: {},
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7029815294762181', async: true, crossorigin: 'anonymous'},
  ]
});
