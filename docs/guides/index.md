---
order: 0
description: Ethereum 与 React 的结合，为快速 Dapp 开发而生的框架
keywords: ['useDapp', 'React', 'ethers', '以太坊', 'Ethereum', 'DApp']
nav:
  title: 指南
  order: 1
---

# 指南

**usedapp 支持哪些以太坊网络？**

- 以太坊主网（Mainnet）
- 以太坊经典网络（Ethereum Classic）
- Kovan测试网络（Kovan Testnet）
- Rinkeby测试网络（Rinkeby Testnet）
- Ropsten测试网络（Ropsten Testnet）

如果您需要在其他以太坊网络上使用 usedapp，您可能需要进行定制化配置。

**usedapp 提供了哪些 React Hooks？**

- useEthers：用于与以太坊网络交互的 Hook。
- useContract：用于与智能合约交互的 Hook。
- useSendTransaction：用于发送交易的 Hook。
- useBlockNumber：用于获取当前区块号的 Hook。
- useGasPrice：用于获取当前以太坊网络的平均 Gas 价格的 Hook。
- useBalance：用于获取指定地址的余额的 Hook。
- useTokenBalance：用于获取指定地址的代币余额的 Hook。
- useExchangePrice：用于获取指定代币的当前价格的 Hook。

使用 usedapp 库中的这些 Hooks 可以使开发人员更轻松地构建去中心化应用。
