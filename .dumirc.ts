import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['https://usedapp.io/img/favicon.svg'],
  autoAlias: false,
  themeConfig: {
    name: 'useDapp',
    logo: 'https://usedapp.io/img/logo.svg',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/youngjuning/usedapp.js.org',
      twitter: 'https://twitter.com/luozhu2021'
    },
  },
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  analytics: {
    ga_v2: 'G-QT3BHRCWSH',
  },
  sitemap: {
    hostname: 'https://usedapp.js.org',
  },
  exportStatic: {},
});
