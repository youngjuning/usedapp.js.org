---
nav:
  title: Getting Started
  order: 1
---

# Getting Started

## Installation

To get started, add the following npm package `@usedapp/core` to your project:

```sh
$ yarn add @usedapp/core
```

## Example

Below is a simple example:

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
          <button onClick={() => activateBrowserWallet()}>Connect</button>{' '}
          <button onClick={() => deactivate()}>Connect</button>
        </div>
        {account && <p>Account: {account}</p>}
        {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
      </div>
    </Provider>
  );
};
```
