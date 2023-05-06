import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'useDapp',
    logo: 'https://usedapp.io/img/logo.svg',
    socialLinks: {
      github: 'https://github.com/youngjuning/usedapp.js.org',
      twitter: 'https://twitter.com/luozhu2021'
    },
  },
  favicons: ['https://usedapp.io/img/favicon.svg'],
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  analytics: {
    ga_v2: 'G-QT3BHRCWSH',
  },
  sitemap: {
    hostname: 'https://usedapp.js.org',
  },
});
