---
nav:
  title: 快速上手
  order: 1
---

# 快速上手

## 安装

要开始使用，请在你的项目中添加以下 npm 包 `@usedapp/core`。

```sh
$ yarn add @usedapp/core
```

## 示例

下面是一个简单的示例：

```tsx
import React from 'react';
import {
  BSC,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

const Provider = ({ children }) => {
  const config: Config = {
    readOnlyChainId: BSC.chainId,
    readOnlyUrls: {
      [BSC.chainId]: 'https://bsc-dataseed1.binance.org/',
    },
  };

  return <DAppProvider config={config}>{children}</DAppProvider>;
};

export default () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <Provider>
      <div>
        <div>
          <button onClick={() => activateBrowserWallet()}>连接钱包</button>{' '}
          <button onClick={() => deactivate()}>断开连接</button>
        </div>
        {account && <p>账号：{account}</p>}
        {etherBalance && <p>余额：{formatEther(etherBalance)}</p>}
      </div>
    </Provider>
  );
};
```
