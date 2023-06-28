---
order: 2
title: 写入
description: 如果要将一个改变状态的交易写入区块链，可以使用 useSendTransaction 钩子。
keywords: ['useDApp', 'React', 'ethers', '以太坊', 'Ethereum', 'Hooks', 'useSendTransaction', 'DApp', '紫竹翻译计划']
---

# 写入

如果要将一个改变状态的交易写入区块链，可以使用 `useSendTransaction` 钩子。

在组件中简单地调用一个 Hook 函数。

```jsx | pure
const { sendTransaction } = useSendTransaction()
```

通常你会在点击按钮的处理函数中使用 `sendTransaction`。

```jsx | pure
const handleClick = () => {
  setDisabled(true)
  sendTransaction({ to: address, value: utils.parseEther(amount) })
}
```

See the [Ether Transactions](https://usedapp-docs.netlify.app/docs/Guides/Transactions/Ether%20Transactions) guide for a more in-depth explanation, or take a look at [Contract Functions](https://usedapp-docs.netlify.app/docs/Guides/Transactions/Contract%20Functions) if you are interested in writing transactions to contracts.
