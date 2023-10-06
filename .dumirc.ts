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
    footer: '<a href="/sitemap.xml" target="_blank">站点地图</a> | <a href="https://t.zsxq.com/0fDyODCQs" target="_blank">紫竹赚美刀</a><br/>Made with ❤️ by <a href="https://github.com/zizhuspot" target="_blank">紫竹光点计划</a>',
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
  metas: [
    {
      name: 'monetag',
      content: 'b70509b53e98ef5811f3d0af5c090b16',
    },
  ],
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7029815294762181', async: true, crossorigin: 'anonymous'},
    `(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('belickitungchan.com',6431899,document.createElement('script'))`
  ],
});
