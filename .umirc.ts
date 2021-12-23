import { defineConfig, IConfig } from 'dumi';

export default defineConfig({
  title: 'useDapp',
  description: 'Framework for rapid Dapp development.',
  favicon: 'https://usedapp.io/img/favicon.ico',
  mode: 'site',
  locales: [['zh-CN', '中文'], ['en-US', 'English']]
  // more config: https://d.umijs.org/config
}as IConfig) ;
