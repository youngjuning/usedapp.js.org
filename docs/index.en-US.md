---
title: useDapp - Framework for rapid Dapp development.
hero:
  title: useDapp
  desc: Framework for rapid Dapp development.
  actions:
    - text: Getting Started
      link: /getting-started
features:
  - icon: https://raw.githubusercontent.com/youngjuning/images/main/202112201357244.png
    title: Connection management
    desc: <ul><li>Read-only mode out-of the box</li><li>Network switching</li><li>Handling multiple networks</li></ul>
  - icon: https://raw.githubusercontent.com/youngjuning/images/main/202112201436639.png
    title: Reading blockchain state
    desc: <ul><li>Auto refresh on new block</li><li>Auto refresh on wallet change</li><li>Combine multiple calls into a single multicall</li></ul>
  - icon: https://raw.githubusercontent.com/youngjuning/images/main/202112201500080.png
    title: Transactions
    desc: <ul><li>Track transaction state</li><li>History</li><li>Notifications</li></ul>
  - icon: https://raw.githubusercontent.com/youngjuning/images/main/202112201504183.png
    title: Browser plugin
    desc: <ul><li>Available in Beta for Firefox and Chrome</li><li>Track under-the-hood events</li><li>Manage ABIs and tags</li></ul>
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

```tsx | pure
import React from 'react';
import { DAppProvider, Config, ChainId } from '@usedapp/core';

const Dapp = () => {
  const config: Config = {
  readOnlyChainId: ChainId.BSC,
    readOnlyUrls: {
      [ChainId.BSC]: 'https://bsc-dataseed1.binance.org/',
    },
  };

  return (
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  )
}
```
