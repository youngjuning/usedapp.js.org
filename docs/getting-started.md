---
nav:
  title: 快速上手
  order: 1
sidemenu: false
---

# 快速上手

## 安装

要开始使用，请在你的项目中添加以下 npm 包 `@usedapp/core`。

```sh
$ yarn add @usedapp/core
```

## 示例

下面是一个简单的示例：

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
          连接
        </Button>
      ) : (
        <Space direction="vertical" size="middle">
          <Button type="primary" danger onClick={deactivate}>
            断开连接
          </Button>
          <div>
            <p>账号：{account}</p>
            {etherBalance && <p>余额：{formatEther(etherBalance)}</p>}
          </div>
        </Space>
      )}
    </Provider>
  );
};

export default App;
```

接下来让我们一步步来看看。

## 设置

你需要做的第一件事是用可选的配置设置`DAppProvider`，并将你的整个应用程序包裹在其中。你可以阅读关于配置的信息 [这里](https://usedapp.readthedocs.io/en/latest/core.html#config)。

```tsx | pure
<DAppProvider config={{}}>
  <App /> {/* 用 Provider 包装你的应用程序 */}
</DAppProvider>
```

## 连接到网络

然后你需要使用 `activateBrowserWallet` 来激活 provider。最好是在用户点击“连接”按钮时进行。

```tsx | pure
export function App() {
  const { activateBrowserWallet, account } = useEthers();

  return (
    <div>
      <div>
        <Button type="primary" onClick={() => activateBrowserWallet()}>
          连接
        </Button>
      </div>
      {account && <p>Account: {account}</p>}
    </div>
  );
}
```

激活后（即用户连接到 MetaMask 这样的钱包），该组件将显示用户的地址。

如果你需要使用浏览器钱包以外的其他连接器，请使用 `useEthers` 的激活方法。这一点请参见 [web3-react](https://github.com/NoahZinsmeister/web3-react/tree/v6/docs#overview) 文档。

## 账户余额

_`useEtherBalance(address: string)`_

提供一个获取账户余额的方法。以账户地址为参数，当数据不可用时（即未连接），返回 `Bignumber` 或 `undefined`。要获得当前连接的账户，请使用 `useEthers()`。

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

提供一种方法来获取由 tokenAddress 指定的 ERC20 代币在所提供账号的余额。返回 `BigNumber` 或当数据不可用时返回 `undefined`。

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
        <p>Token 名称: BSW</p>
        <p>Token 地址: {BSW}</p>
      </div>
      {!account ? (
        <Button type="primary" onClick={() => activateBrowserWallet()}>
          连接
        </Button>
      ) : (
        <Space direction="vertical" size="middle">
          <Button type="primary" danger onClick={deactivate}>
            断开连接
          </Button>
          <div>
            {account && <p>账号: {account}</p>}
            {tokenBalance && <p>BSW 余额: {formatUnits(tokenBalance, 18)}</p>}
          </div>
        </Space>
      )}
    </Provider>
  );
};

export default TokenBalance;
```

## 故障处理

### Type mismatch when building

如果在构建应用程序时，你在 `@ethersproject` 中看到关于类型不匹配的错误。

比如说。

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

这可能是 yarn 获得 `@ethersproject` 的内部版本高于 useDApp 中指定的错误。为了解决这个问题，你需要在你的 `package.json` 中添加 resolutions，将导致错误的 etherspoject 包加入正确的版本。resolutions 强制 yarn 安装指定版本的软件包。

比如：

```json
"resolutions": {
  "@ethersproject/abi": "5.2.0",
  "@ethersproject/contracts": "5.2.0"
}
```
