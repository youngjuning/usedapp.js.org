---
title: ERC-20 代币标准
nav:
  title: 代币
  order: 3
order: 1
---

ERC-20（以太坊意见征求 20）由 Fabian Vogelsteller 提出于 2015 年 11 月。这是一个能实现智能合约中代币的 API 标准。

它提供了多个功能。例如转账代币从一个帐户到不同的帐户，来实现获取帐户的当前余额以及网络上的可用令牌总供应量。 除此之外，它还具有其他功能，如批准代币花费到第三方帐户中。

如果智能合约实施了下列方法和事件，它可以被称为 ERC-20 代币合约， 一旦部署，将负责跟踪以太坊上创建的代币。

## 方法

1. `function name() public view returns (string)`
1. `function symbol() public view returns (string)`
1. `function decimals() public view returns (uint8)`
1. `function totalSupply() public view returns (uint256)`
1. `function balanceOf(address _owner) public view returns (uint256 balance)`
1. `function transfer(address _to, uint256 _value) public returns (bool success)`
1. `function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)`
1. `function approve(address _spender, uint256 _value) public returns (bool success)`
1. `function allowance(address _owner, address _spender) public view returns (uint256 remaining)`

## 事件

1. `event Transfer(address indexed _from, address indexed _to, uint256 _value)`
1. `event Approval(address indexed _owner, address indexed _spender, uint256 _value)`

## JSON ABI

```json
[
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{ "name": "", "type": "string" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "name": "", "type": "string" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "name": "", "type": "uint8" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name": "_owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_to", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "name": "", "type": "bool" }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_from", "type": "address" },
      { "name": "_to", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "transferFrom",
    "outputs": [{ "name": "", "type": "bool" }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      { "name": "_spender", "type": "address" },
      { "name": "_value", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "name": "", "type": "bool" }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "from", "type": "address" },
      { "indexed": true, "name": "to", "type": "address" },
      { "indexed": false, "name": "value", "type": "uint256" }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      { "name": "_owner", "type": "address" },
      { "name": "_spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "name": "owner", "type": "address" },
      { "indexed": true, "name": "spender", "type": "address" },
      { "indexed": false, "name": "value", "type": "uint256" }
    ],
    "name": "Approval",
    "type": "event"
  },
  { "payable": true, "stateMutability": "payable", "type": "fallback" }
]
```

## 示例

让我们看看如此重要的一个标准是如何使我们能够简单地检查 BSC 上的任何 ERC-20 代币合约。 我们只需要合约的应用二进制接口 (ABI) 来创造一个 ERC-20 代币界面。下面我们将使用一个简化的 ABI，使其成为一个简单易用的例子。

```tsx
import React, { useState } from 'react';
import { formatEther } from '@ethersproject/units';
import { Statistic, Button, Space } from 'antd';
import { ethers } from 'ethers';
import { useAsyncEffect } from 'ahooks';
import erc20ABI from '../../public/abis/erc20.json';

const bswAddress = '0x965f527d9159dce6288a2219db51fc6eef120dd1';
const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.binance.org/');
const bswContract = new ethers.Contract(bswAddress, erc20ABI, provider);
const account = '0xc9bFCD4AF87B23C5869baB3a9b005D72221FAC0a';

const App = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [balance, setBalance] = useState(0);

  useAsyncEffect(async () => {
    const name = await bswContract.name();
    const symbol = await bswContract.symbol();
    const balance = await bswContract.balanceOf(account);
    const decimals = await bswContract.decimals();
    const totalSupply = await bswContract.totalSupply();

    setName(name);
    setSymbol(symbol);
    setBalance(parseFloat(ethers.utils.formatUnits(balance, 18)).toFixed(3));
    setDecimals(decimals);
    setTotalSupply(totalSupply);
  }, []);

  return (
    <div>
      <p>bswAddress: {bswAddress}</p>
      <Space size="large">
        <Statistic title="name" value={name} loading={!name} />
        <Statistic title="symbol" value={symbol} loading={!symbol} />
        <Statistic title="decimals" value={decimals} loading={!decimals} />
        <Statistic title="totalSupply" value={totalSupply} loading={!totalSupply} />
        <Statistic title="balance" value={balance} loading={!balance} />
      </Space>
    </div>
  );
};

export default App;
```
