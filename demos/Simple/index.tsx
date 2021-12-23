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
          <button onClick={() => activateBrowserWallet()}>连接钱包</button>{' '}
          <button onClick={() => deactivate()}>断开连接</button>
        </div>
        {account && <p>账号：{account}</p>}
        {etherBalance && <p>余额：{formatEther(etherBalance)}</p>}
      </div>
    </Provider>
  );
};

export default Simple;
