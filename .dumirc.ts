import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://usedapp.io/img/favicon.svg'],
  autoAlias: false,
  themeConfig: {
    name: 'useDApp',
    logo: 'https://usedapp.io/img/favicon.svg',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/youngjuning/usedapp.js.org',
      twitter: 'https://twitter.com/luozhu2021'
    },
    hd: { rules: [] },
    footer: 'Made with ❤️ by <a href="https://youngjuning.js.org/zizhudocs" target="_blank" nofollow>紫竹翻译计划</a>'
  },
  theme: {
    '@c-primary': '#13aa52',
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/gh/youngjuning/usedapp.js.org@gh-pages/'
      : '/',
  analytics: {
    ga_v2: 'G-QT3BHRCWSH',
  },
  sitemap: {
    hostname: 'https://usedapp.js.org',
  },
  hash: true,
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7029815294762181', async: true, crossorigin: 'anonymous'}
  ],
});
