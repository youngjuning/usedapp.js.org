---
order: 4
description: Ethereum 与 React 的结合，为快速 Dapp 开发而生的框架
keywords: ['useDapp', 'React', 'ethers', '以太坊', 'Ethereum', 'DApp', 'ganache']
group:
  title: 连接
  order: 1
---

# 自定义区块链

在本教程中，我们将介绍连接到自定义区块链的步骤，这些区块链不作为[已知区块链](https://adfoc.us/8114291)的一部分列出。

## 前提

本教程假定用户已经掌握了 `useDApp` 的基础知识。如果您是新用户，请参阅[入门指南](/getting-started)。

## 动机

useDApp 的典型用途是连接到众所周知的链，例如以太坊主网或 xDai 链。

但是，如果您的用例是连接到一个较少知名的链，或者是由您的团队创建的自定义链，本教程将揭示连接 `useDApp` 到任何链所需的步骤。

作为第一步，请查看您的链是否已列在[已知区块链]((https://adfoc.us/8114291))列表中。

## 创建自定义区块链对象

第一步是创建一个链配置对象，其中包含有关自定义链的所有必需信息。

### 示例

```ts | pure
import { Chain } from '@usedapp/core'

export const TutorialChain: Chain = {
  chainId: 99999,
  chainName: 'TutorialChain',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0x0000000000000000000000000000000000000000',
  getExplorerAddressLink: (address: string) => `https://tutorialchain.etherscan.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://tutorialchain.etherscan.io/tx/${transactionHash}`,
  // Optional parameters:
  rpcUrl: 'https://rpc.tutorialchain.io',
  blockExplorerUrl: 'https://tutorialchain.etherscan.io',
  nativeCurrency: {
    name: 'TutorialCoin',
    symbol: 'TUT',
    decimals: 18,
  }
}
// IMPORTANT: Fill that object with your own data.
```

### 解释

- chainId：链的 ID。每个链都有唯一的 `chainId`
- chainName：链的名称
- isTestChain：该链是否为测试网络，例如 Kovan 或 Ropsten
- isLocalChain：该链是否为在本地主机上运行的开发链
- multicallAddress：链上 [Multicall](https://adfoc.us/81142995306698) 合约的地址
- getExplorerAddressLink：一个函数，根据以太坊地址构建到区块链浏览器的链接
- getExplorerTransactionLink：一个函数，根据交易哈希构建到区块链浏览器的链接
- rpcUrl：（可选）RPC URL。如果要让您的应用程序能够向Metamask添加新网络，则至少需要一个
- blockExplorerUrl：（可选）区块浏览器地址，向Metamask添加网络时可选
- nativeCurrency：（可选）本地货币，向 Metamask 添加网络时可选（否则将默认为 ETH）。请参考[Metamask 文档](https://adfoc.us/81142995310604)或上面的示例。

### multicallAddress

[Multicall](https://adfoc.us/81142995306698) 聚合了多个合约的常量函数调用结果。

这是 `useDApp` 操作所必需的。

如果您的自定义链上没有已知的 Multicall 合约部署，需要部署并将地址配置为 `multicallAddress`。可以使用 [Mars](https://adfoc.us/81142995310706) 部署工具进行部署。

如果该链是本地开发链，则 `useDApp` 会自动为您部署 Multicall 合约。

## 将自定义链包含在配置中

使用创建并保存在 `tutorial-chain.ts` 文件中的自定义链配置，您可以将其包含在[开始示例](/getting-started#示例)中引入的 `useDApp` Config 对象中。

带有您自定义链的新 Config 对象将传递到 `<DAppProvider>` 组件中。

```diff
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
+ DEFAULT_SUPPORTED_CHAINS,
} from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

import App from 'App'
+ import { TutorialChain } from './tutorial-chain'

const config: Config = {
-  readOnlyChainId: Mainnet.chainId,
+  readOnlyChainId: TutorialChain.chainId,
    readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
+   [TutorialChain.chainId]: '<url of the custom chain>',
    },
+   networks: [...DEFAULT_SUPPORTED_CHAINS, TutorialChain],
  }

export default () => {
  return (
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  )
}
```

你已经完全设置好了 - 现在在 `<App/>` 组件中，你可以使用 `useDApp` 提供的功能来访问你的 TutorialChain。

## 给 `useDApp` 提交一个 PR（可选）

如果您想将自定义链添加到已知链列表中，可以向 `useDApp` 存储库发送 PR。在您的 PR 中，请确保包括以下更改：

- 将描述您的链的文件添加到 `packages/core/src/model/chain` 目录中。请将文件命名为 `<chainName>.ts`。例如，如果您的链叫做 `TutorialChain`，则文件名应为 `tutorial-chain.ts`。该文件应导出一个实现 `Chain` 接口的对象。示例链对象在本教程的第一步中提供。
- 接下来，请确保从 `packages/core/src/model/chain/index.ts` 文件中导入并重新导出添加的文件。
- 将您的链添加到 `packages/core/src/constants/chainId.ts` 文件中的 `DEFAULT_SUPPORTED_CHAINS` 数组中。

提交 PR 时，请确保包括更改的简短描述和动机。

此步骤是可选的 - 如果您认为其他用户将受益于此，可以发送带有自定义链的 PR。

### 示例 PR

- [ThunderCore](https://adfoc.us/81142995310858) chain

## 总结

在本教程中，我们介绍了使用 `useDApp` 与不包含在默认设置中的自定义链所需的步骤。我们创建了自定义链对象，其中包含有关该链的所有必要信息。接下来，我们将自定义链包含在 `useDApp` 配置中，并可选择为 `useDApp` 创建 PR，以将自定义链包含在默认链集合中。
