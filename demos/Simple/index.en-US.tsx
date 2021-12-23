import React from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import Provider from '../Provider';

const Simple = () => {
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

export default Simple;
