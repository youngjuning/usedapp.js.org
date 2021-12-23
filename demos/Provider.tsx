import React from 'react';
import { BSC, DAppProvider, Config } from '@usedapp/core';

const Provider = ({ children }) => {
  const config: Config = {
    readOnlyChainId: BSC.chainId,
    readOnlyUrls: {
      [BSC.chainId]: 'https://bsc-dataseed1.binance.org/',
    },
  };

  return <DAppProvider config={config}>{children}</DAppProvider>;
};

export default Provider;
