---
order: 1
title: 只读模式
description: Ethereum 与 React 的结合，为快速 Dapp 开发而生的框架
keywords: ['useDApp', 'React', 'ethers', '以太坊', 'Ethereum', 'DApp', '紫竹翻译计划']
group:
  title: 连接
  order: 1
---

# 只读模式

为了以只读模式连接到网络，请在应用程序配置中提供 `readOnlyChainId` 和 `readOnlyUrls` 字段。

以下是示例配置：

```jsx | pure
import { Mainnet } from '@usedapp/core'

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}
```
