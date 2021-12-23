---
nav:
  title: Getting Started
  order: 1
sidemenu: false
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
import { DAppProvider, useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { Button, Space } from 'antd';

const Provider = ({ children }) => {
  return <DAppProvider config={{}}>{children}</DAppProvider>;
};

const App = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <Provider>
      {!account ? (
        <Button type="primary" onClick={() => activateBrowserWallet()}>
          Connect
        </Button>
      ) : (
        <Space direction="vertical" size="middle">
          <Button type="primary" danger onClick={deactivate}>
            DisConnect
          </Button>
          <div>
            {account && <p>Account: {account}</p>}
            {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
          </div>
        </Space>
      )}
    </Provider>
  );
};

export default App;
```

Let’s go over it step by step.

## Setup

The first thing you need to do is set up `DAppProvider` with optional config and wrap your whole App in it. You can read about config [here](https://usedapp.readthedocs.io/en/latest/core.html#config).

```tsx | pure
<DAppProvider config={{}}>
  <App /> {/* Wrap your app with the Provider */}
</DAppProvider>
```

## Connecting to a network

Then you need to activate the provider using `activateBrowserWallet`. It’s best to do when the user clicks “Connect” button.

```tsx | pure
export function App() {
  const { activateBrowserWallet, account } = useEthers();

  return (
    <div>
      <div>
        <Button type="primary" onClick={() => activateBrowserWallet()}>
          Connect
        </Button>
      </div>
      {account && <p>Account: {account}</p>}
    </div>
  );
}
```

After the activation (i.e. user connects to a wallet like MetaMask) the component will show the user’s address.

If you need to use another connector than a browser wallet, use the activate method from useEthers. See the [web3-react](https://github.com/NoahZinsmeister/web3-react/tree/v6/docs#overview) doc for that one.

## Ether balance

_`useEtherBalance(address: string)`_

Provides a way to fetch the account balance. Takes the account address as an argument and returns `Bignumber` or `undefined` when data is not available(i.e. not connected). To obtain currently connected `account` employ `useEthers()`.

```tsx | pure
import { formatEther } from '@ethersproject/units';

const EtherBalance = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return <div>{etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}</div>;
};

export default EtherBalance;
```

## Token balance

_`useTokenBalance(address: string, tokenAddress: string)`_

Provides a way to fetch balance of ERC20 token specified by tokenAddress for provided address. Returns BigNumber or undefined when data is not available.

```tsx
import React from 'react';
import { DAppProvider, useTokenBalance, useEthers } from '@usedapp/core';
import { formatUnits } from '@ethersproject/units';
import { Button, Space } from 'antd';

const Provider = ({ children }) => {
  return <DAppProvider config={{}}>{children}</DAppProvider>;
};

const BSW = '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1';

const TokenBalance = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const tokenBalance = useTokenBalance(BSW, account);

  return (
    <Provider>
      <div>
        <p>Token Name: BSW</p>
        <p>Token Address: {BSW}</p>
      </div>
      {!account ? (
        <Button type="primary" onClick={() => activateBrowserWallet()}>
          Connect
        </Button>
      ) : (
        <Space direction="vertical" size="middle">
          <Button type="primary" danger onClick={deactivate}>
            DisConnect
          </Button>
          <div>
            {account && <p>Account: {account}</p>}
            {tokenBalance && <p>Token Balance: {formatUnits(tokenBalance, 18)}</p>}
          </div>
        </Space>
      )}
    </Provider>
  );
};

export default TokenBalance;
```

## Troubleshooting

### Type mismatch when building

If when building an app you see errors about type mismatch in `@ethersproject`.

For example:

```sh
$ yarn build
yarn run v1.22.10
$ tsc --noEmit && rimraf build && webpack --mode production --progress
src/components/Transactions/Forms.tsx:12:52 - error TS2345: Argument of type 'Interface' is not assignable to parameter of type 'ContractInterface'.
  Property 'getError' is missing in type 'import("github.com/ethworks/usedapp/packages/example/node_modules/@ethersproject/abi/lib/interface").Interface' but required in type 'import("github.com/ethworks/usedapp/packages/example/node_modules/@ethersproject/contracts/node_modules/@ethersproject/abi/lib/interface").Interface'.

12 const contract = new Contract(wethContractAddress, wethInterface)
                                                      ~~~~~~~~~~~~~

  node_modules/@ethersproject/contracts/node_modules/@ethersproject/abi/lib/interface.d.ts:53:5
    53     getError(nameOrSignatureOrSighash: string): ErrorFragment;
          ~~~~~~~~
    'getError' is declared here.


Found 1 error.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

It may be an error of yarn getting internal versions of `@ethersproject` that are higher then specified in useDApp. To fix this you need to add resolutions to your `package.json` with etherspoject packages that cause an error, with correct version. Resolutions force yarn to install specified versions of packages.

For example:

```json
"resolutions": {
  "@ethersproject/abi": "5.2.0",
  "@ethersproject/contracts": "5.2.0"
}
```
