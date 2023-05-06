---
order: 1
description: 有许多有用的 Hooks 可以用来读取区块链状态。
keywords: ['useDapp', 'React', 'ethers', '以太坊', 'Ethereum', 'Hooks']
---

# 读取

有许多有用的 Hooks 可以用来读取区块链状态，例如：

- `useBlockMeta()` - 返回最近挖掘的区块的元信息（`timestamp` 和 `difficulty`）
- `useEtherBalance(address)` - 返回给定地址的以太币余额（或 `undefined`）
- `useTokenBalance(tokenAddress, address)` - 返回给定地址的给定代币 BigNumber 格式的余额（或 `undefined`）
- `useTokenAllowance(tokenAddress, ownerAddress, spenderAddress)` - 返回给定所有者和支出者地址对的给定代币 BigNumber 格式的资金（或 `undefined`）

## 示例

### Ether Balance

`useEtherBalance(address: string)`

提供一种获取账户余额的方法。该方法以账户地址作为参数，并返回 BigNumber 格式余额，如果数据不可用（即未连接），则返回 `undefined`。要获取当前连接的账户，请使用 `useEthers()` 函数。

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { formatEther } from '@ethersproject/units'
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from '@usedapp/core'
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
  else return <Button type="primary" size="large" color="red" onClick={() => activateBrowserWallet()}>Connect</Button>
}

const App = () => {
  const { account, chainId } = useEthers()
  const etherBalance = useEtherBalance(account)
  if (chainId && !config.readOnlyUrls[chainId]) {
    return <p>Please use either Mainnet or Goerli testnet.</p>
  }

  return (
    <div>
      <ConnectButton />
      {etherBalance && (
        <div className="balance">
          <br />
          Ether balance:
          <p className="bold">{formatEther(etherBalance)} ETH</p>
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

### Token Balance

`useTokenBalance(address: string, tokenAddress: string)`

提供一种获取指定地址 ERC20 代币余额的方法。该方法以代币地址作为参数，并返回 BigNumber 格式的余额，如果数据不可用，则返回 `undefined`。

```jsx
import React from 'react'
import { formatEther } from '@ethersproject/units'
import { Mainnet, DAppProvider, useTokenBalance, useEthers, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { Button } from 'antd';

const DAI = {
  [Mainnet.chainId]: '0x6b175474e89094c44da98b954eedeac495271d0f',
  [Goerli.chainId]: '0x5C221E77624690fff6dd741493D735a17716c26B',
}

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
  else return <Button type="primary" size="large" color="red" onClick={() => activateBrowserWallet()}>Connect</Button>
}

const TokenBalance = () => {
  const { account, chainId } = useEthers()
  const daiBalance = useTokenBalance(DAI[chainId], account)
  if (chainId && !config.readOnlyUrls[chainId]) {
    return <p>Please use Mainnet for this example to work.</p>
  }

  return (
    <div>
      <ConnectButton />
      {daiBalance && (
        <div className="balance">
          Dai balance:
          <p className="bold">{formatEther(daiBalance)}</p>
        </div>
      )}
    </div>
  )
}

export default () => (
  <DAppProvider config={config}>
    <TokenBalance />
  </DAppProvider>
)
```

## 自定义 Hooks

See the [Custom Hooks](https://usedapp-docs.netlify.app/docs/Guides/Reading/Custom%20Hooks) guide if you need to read state not supported by the built-in [hooks](https://usedapp-docs.netlify.app/docs/API%20Reference/Hooks).

## 在没有浏览器钱包的情况下进行读取操作

为了在没有浏览器钱包的情况下以只读模式与区块链进行交互，只需在配置文件中指定 `readOnlyChainId` 和 `readOnlyUrls`，无需激活即可使用。

```jsx
import React from 'react'
import { Config, DAppProvider, Goerli, Mainnet, useEtherBalance } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { formatEther } from '@ethersproject/units'

const STAKING_CONTRACT = '0x00000000219ab540356cBB839Cbe05303d7705Fa'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

const App = () => {
  const etherBalance = useEtherBalance(STAKING_CONTRACT)

  return (
    <div>
      {etherBalance && (
        <div className="balance">
          Staking contract balance:
          <p className="bold">{formatEther(etherBalance)} ETH</p>
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
