---
title: useDapp - 快速开发 Dapp 的框架
hero:
  title: useDapp
  desc: 快速开发 Dapp 的框架
  actions:
    - text: 快速上手
      link: /getting-started
features:
  - icon: https://raw.githubusercontent.com/youngjuning/images/main/202112201357244.png
    title: 连接管理
    desc: <ul><li>Read-only mode out-of the box</li><li>Network switching</li><li>Handling multiple networks</li></ul>
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

Framework for rapid DApp development.

```tsx | pure
import React from 'react';
import { DAppProvider, Config, ChainId } from '@usedapp/core';

const config: Config = {
  readOnlyChainId: ChainId.BSC,
  readOnlyUrls: {
    [ChainId.BSC]: 'https://bsc-dataseed1.binance.org/',
  },
};

ReactDOM.render (
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
```
