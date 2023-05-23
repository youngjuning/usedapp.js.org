---
order: 3
description: Ethereum 与 React 的结合，为快速 Dapp 开发而生的框架
keywords: ['useDapp', 'React', 'ethers', '以太坊', 'Ethereum', 'DApp', 'ganache']
group:
  title: 连接
  order: 1
---

# 本地区块链

在本教程中，我们将演示如何使用 Ganache 连接到本地链。连接到本地链对于开发 DApp 可能有很多好处：

- 交易更快
- 可以离线工作
- 不依赖测试网

## ganache 教程

Ganache 是用于快速开发以太坊分布式应用程序的个人区块链。您可以在整个开发周期中使用 Ganache；它可以让您在安全且确定性的环境中开发、部署和测试 dApps。

### 安装

```bash
$ npm install -g ganache
```

### 运行

```bash
$ ganache
```

你会看到类似于以下的输出：

```bash
ganache v7.8.0 (@ganache/cli: 0.9.0, @ganache/core: 0.9.0)
Starting RPC server

Available Accounts
==================
(0) 0xe8afBd5B6f228E96885b89f5469E19aF178F4d55 (1000 ETH)
(1) 0xB4ad28e48ac41465C502d451a4b25adcdAD8B626 (1000 ETH)
(2) 0xE41dd53bDF9eCBA54ff4191f4895e5F447eFb28e (1000 ETH)
(3) 0xFDbF2D9DBd5EAc071DAf3902f1DbfDad6bC393C4 (1000 ETH)
(4) 0x18d05DA9a603853e0D063054bE8058e9e416480e (1000 ETH)
(5) 0x18508E132D90A00bFda2403Fbd9AB8e22494d3c2 (1000 ETH)
(6) 0x764c38E11271f8a601c4399B19E680719114D103 (1000 ETH)
(7) 0xE37884F800c45850510d09C393359a4d140b8a93 (1000 ETH)
(8) 0x56AdF299c77B6F2880a5F6AdfE6D79E1D93504D1 (1000 ETH)
(9) 0xcFF2e3bab9bB9280E208dca7F3fc94e4aDf8B5B1 (1000 ETH)

Private Keys
==================
(0) 0xc03b1352fd7599ef31123aa2bbae4dd4f9efe19e7eef231ce5ebeef9ae99dfc3
(1) 0x865730c58950686dfd53391378d65c9453ee68002529a09735a69013d4939b3c
(2) 0x6c35758ed534542797ae47420b14ddfda59b6688e6618c99d1de8c44ce4f9efa
(3) 0xc7999bdc7af2f67766ef80bf614701fe504014d6636479bc26d43a4ce2e80474
(4) 0x9b263ecdc1279dd06abc685cfaead1484fa18a7673bee130b4b0c6366fb22415
(5) 0x8cb7ae2a86336266ff67f1d7aefa63c13c7041b90eb6fa682fc5fa0c35e1610f
(6) 0x089972975192c0abadd7622faeae52ce103c2c056aa2348070421c877917fa12
(7) 0x0e0cf5763fc9dcbc9bf3b591a16ec6e2a80a3807f9ddbde210a52d0b7db9a948
(8) 0x5ce5108f7aa0acb630841410e1160432d84e3aad81f747cb21511914ed0a4024
(9) 0xb85b6bb64dd85491032148cfef4304a5177e2751218606a1c9876cdf3cbec36e

HD Wallet
==================
Mnemonic:      blind assist doctor reflect dose keen frown dust guard celery mushroom wolf
Base HD Path:  m/44'/60'/0'/0/{account_index}

Default Gas Price
==================
2000000000

BlockGas Limit
==================
30000000

Call Gas Limit
==================
50000000

Chain Id
==================
1337

RPC Listening on 127.0.0.1:8545
```

## 配置

把 ganache 地址添加到配置中。

```jsx | pure
import { Localhost } from '@usedapp/core'

const config = {
  readOnlyChainId: Localhost.chainId,
  readOnlyUrls: {
    [Localhost.chainId]: 'http://127.0.0.1:8545',
  },
}
```

## 从区块链读取

要从区块链中读取数据，只需在指定的调用中添加一个查询选项（queryOptions）对象即可。由于 useDapp 会自动执行该操作，因此您无需部署 multicall。

```jsx | pure
const etherBalance = useEtherBalance(account, { chainId: Localhost.chainId })
const tokenBalance = useTokenBalance(tokenAddress, account, { chainId: Localhost.chainId })
```

## 总结

在本教程中，我们介绍了使用 Ganache 本地区块链和 useDApp 的步骤。
