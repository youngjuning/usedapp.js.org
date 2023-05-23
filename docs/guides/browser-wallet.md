---
order: 2
title: 浏览器钱包
description: Ethereum 与 React 的结合，为快速 Dapp 开发而生的框架
keywords: ['useDApp', 'React', 'ethers', '以太坊', 'Ethereum', 'DApp']
group:
  title: 连接
  order: 1
---

# 浏览器钱包

要在启用了 Web3 的浏览器中连接到钱包，请使用 `useEthers()` 返回的 `activateBrowserWallet`。一旦连接成功，`account` 变量将可用。

以下是示例：

```jsx | pure
import { useEthers } from '@usedapp/core'
import { Button } from 'antd'

const App = () => {
  const { activateBrowserWallet, account } = useEthers()
  return (
    <div>
      {!account && <Button type="primary" size="large" onClick={activateBrowserWallet}>Connect</Button>}
      {account && <p>Account: {account}</p>}
    </div>
  )
}
```

## useEthers

useEthers 钩子返回许多有用的函数和变量，如下所示：

- account：当前用户账号（若未连接或在只读模式下连接，则为 `null`）
- chainId：当前链 ID（如果未连接则为 `undefined`）
- library：一个 ethers [Web3Provider](https://adfoc.us/81142995306598) 的实例（如果未连接则为 `undefined`）。了解更多关于 ethers 提供者的内容，请[点击这里](https://adfoc.us/81142995306665)。
- active：布尔值，指示提供程序是否已连接（读或写模式）
- activate：允许连接到钱包的功能。这是一个 [web3-react](http://adfoc.us/81142995306675) 功能，可以使用各种连接器。
- deactivate：断开钱包连接的功能
- error：连接过程中发生的错误（例如，连接中断、不支持的网络等）
- switchNetwork：一个功能，会根据给定的 chainId 要求浏览器钱包切换到该网络，并尝试将该网络添加到钱包中（仅与 Metamask 兼容）。

## 示例

以下示例演示了如何管理和使用连接。

该应用程序允许在只读模式下查看以太坊 2.0 质押合约的余额。当连接钱包后，它还会显示用户帐户及其余额。

```jsx
import React from 'react'
import { formatEther } from '@ethersproject/units'
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { Button } from 'antd'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

const STAKING_CONTRACT = '0x00000000219ab540356cBB839Cbe05303d7705Fa'

const App = () => {
  const { account, activateBrowserWallet, deactivate, chainId } = useEthers()
  const userBalance = useEtherBalance(account)
  const stakingBalance = useEtherBalance(STAKING_CONTRACT)
  if (!config.readOnlyUrls[chainId]) {
    return <p>Please use either Mainnet or Goerli testnet.</p>
  }

  const ConnectButton = () => (
    <div>
      <Button type="primary" size="large" onClick={() => activateBrowserWallet()}>Connect</Button>
      <p>Connect to wallet to interact with the example.</p>
    </div>
  )

  const MetamaskConnect = () => (
    <div>
      {account && (
        <div>
          <div className="inline">
            <div className="account">{account}</div>
          </div>
          <br />
        </div>
      )}
      {!account && <ConnectButton />}
      {account && <Button type="primary" size="large" danger onClick={deactivate}>Disconnect</Button>}
      <br />
    </div>
  )

  return (
    <div>
      <MetamaskConnect />
      {userBalance && (
        <div className="balance">
          <br />
          Ether balance:
          <p className="bold">{formatEther(userBalance)} ETH</p>
        </div>
      )}
      {stakingBalance && (
        <div className="balance">
          ETH2 staking balance:
          <p className="bold">{formatEther(stakingBalance)} ETH</p>
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
