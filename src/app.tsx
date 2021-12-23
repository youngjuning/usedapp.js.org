import './dumi.less';
import { BSC, DAppProvider, Config } from '@usedapp/core';

const config: Config = {
  readOnlyChainId: BSC.chainId,
  readOnlyUrls: {
    [BSC.chainId]: 'https://bsc-dataseed1.binance.org/',
  },
};

export function rootContainer(container: any) {
  return <DAppProvider>{container}</DAppProvider>;
}
