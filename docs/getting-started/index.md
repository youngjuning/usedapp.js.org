---
order: 0
title: 安装
description: 要开始使用 useDApp，您需要拥有一个可用的 React 环境。
keywords: ['useDApp', 'React', 'ethers', '以太坊', 'Ethereum', 'DApp', '紫竹翻译计划']
nav:
  title: 开始
  order: 0
---

# 安装

要开始使用 useDApp，您需要拥有一个可用的 React 环境。

要开始，请在您的项目中添加以下 npm 包 `@usedapp/core` 及其对等依赖项。

```bash
# Yarn
$ yarn add @usedapp/core ethers@5.7.2
# Or NPM
$ npm install @usedapp/core ethers@5.7.2
```

## 示例

下面是一个简单的例子：

```jsx
import React from 'react'

import { DAppProvider, useEtherBalance, useEthers, Config, Mainnet, Goerli } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'
import { Button } from 'antd';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

const ConnectButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers()
  // 'account' being undefined means that we are not connected.
  if (account) return <Button type="primary" danger size="large" onClick={() => deactivate()}>Disconnect</Button>
  else return <Button type="primary" size="large" onClick={() => activateBrowserWallet()}>Connect</Button>
}

const App = () => {
  const { account, chainId } = useEthers()
  const etherBalance = useEtherBalance(account)
  if (!config.readOnlyUrls[chainId]) {
    return <p>Please use either Goerli testnet.</p>
  }

  return (
    <div>
      <ConnectButton />
      {etherBalance && (
        <div className="balance">
          <br />
          Address:
          <p className="bold">{account}</p>
          <br />
          Balance:
          <p className="bold">{formatEther(etherBalance)}</p>
        </div>
      )}
    </div>
  )
}

export default () => (
  <DAppProvider config={config}>
    <App />
  </DAppProvider>
)
```

## 设置

你需要做的第一件事是使用可选配置设置 `DAppProvider` 并将整个应用程序包装在其中。

```jsx | pure
<DAppProvider>
  <App /> {/* 使用 Provider 包装你的应用程序。 */}
</DAppProvider>
```

## 连接到浏览器钱包

然后，您需要使用 `activateBrowserWallet` 激活提供程序。最好在用户单击“连接”按钮时执行此操作。

```jsx | pure
const App = () => {
  const { activateBrowserWallet, account } = useEthers()
  return (
    <div>
      <div>
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      </div>
      {account && <p>Account: {account}</p>}
    </div>
  )
}
```

激活后（即用户连接到像 MetaMask 这样的钱包），该组件将显示用户的地址。

如果你需要使用除浏览器钱包之外的其他连接器，请使用 `useEthers` 中的 `activate` 方法。请参阅 [web3-react](https://adfoc.us/81142995306560) 文档了解更多信息。
