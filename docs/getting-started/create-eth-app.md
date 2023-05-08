---
order: 3
description: 你可以利用 create-eth-app 快速初始化一个以太坊应用。
keywords: ['useDapp', 'React', 'ethers', '以太坊', 'Ethereum', 'Hooks', 'create-eth-app', 'DApp']
---

# Create Eth App

## 安装

要使用 useDapp 快速启动开发，请按照以下步骤操作：

1. 在本地开发机器上安装 Node 14 或更高版本。如果在服务器上不需要这样做。
2. 安装 Yarn。因为 Create Eth App 依赖于 Yarn Workspaces，而 Npm 不支持此功能。
3. 运行以下命令快速启动开发:

```bash
yarn create eth-app my-eth-app
```

这将创建一个名为 `my-eth-app` 的文件夹，并且里面已经创建好了一切，可以开始进行开发工作了。

```bash
my-eth-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
└── packages
    ├── contracts
    │   ├── README.json
    │   ├── package.json
    │   └── src
    │       ├── abis
    │       │   ├── erc20.json
    │       │   └── ownable.json
    │       ├── addresses.js
    │       └── index.js
    ├── react-app
    │   ├── README.md
    │   ├── package.json
    │   ├── node_modules
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   └── manifest.json
    │   └── src
    │       ├── App.css
    │       ├── App.js
    │       ├── App.test.js
    │       ├── ethereumLogo.svg
    │       ├── index.css
    │       ├── index.js
    │       ├── serviceWorker.js
    │       └── setupTests.js
    └── subgraph
        ├── README.md
        ├── abis
        │   └── erc20.json
        ├── package.json
        ├── schema.graphql
        ├── src
        │   └── mappings
        │       ├── tokens.ts
        │       └── transfers.ts
        └── subgraph.yaml
```

## Start

在 `my-eth-app` 文件夹中运行以下命令:

```bash
yarn react-app:start
```

之后该应用程序将在本地启动，可以通过在浏览器中打开 `http://localhost:3000/` 来查看它。

## 模版

Create Eth App 附带了许多预填有合约 ABIs、地址和子图的去中心化金融模板。转到 templates 文件夹，从列表中选择任何框架并查看可用的模板。

您可以将模板名称作为 `--template` 命令行参数的值进行传递。

```bash
yarn create eth-app my-eth-app --template compound
```

## 哲学

- 设计上极简：只需一个命令，您就能创建一个新的以太坊为动力的 React 应用程序。无需中间安装、脚本或 shims。
- 端到端：Create Eth App 提供了构建和维护规模化的以太坊为动力的React应用程序所需的一切，将 Yarn Workspaces、Create React App 和 The Graph 集成到一个平台上。
- 面向体验架构师：正如 Kames CG 在“以太坊增长的问题”中所指出的那样，以太坊生态系统更需要顶尖的产品创造者，而不是智能合约开发人员。Create Eth App 并没有提供智能合约开发环境，而是期望您导入自己的 ABI 或基于 Maker、Compound 或 Sablier 等已有协议进行开发。
- 未重复造轮子：底层使用的是 Create React App，这是最受欢迎和经过考验的前端开发环境之一。

## 包含什么

您的环境将拥有构建现代的以太坊为动力的单页 React 应用所需的一切：

- 通过 Yarn Workspaces 实现顺畅的项目管理
- 与 Create React App 一起提供的所有内容：支持 React、JSX、ES6、TypeScript 和 Flow 语法
- 可以索引 ERC-20 合约发出的事件的模板子图
- 最简洁的结构来管理智能合约 ABI 和地址
- 使用单个依赖项轻松更新上述工具

## 适合

Create Eth App 非常适合：

- 在舒适且功能丰富的开发环境中学习编写以太坊应用程序。
- 开始新的以太坊为动力的单页 React 应用程序，而不会浪费时间复制粘贴样板文件。
- 为与 Ethereum 相关的库和组件创建使用 React 的示例。

## 源码

源代码可在 [Github](https://adfoc.us/81142995305386) 上找到。
