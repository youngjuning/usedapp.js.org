import React from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { Button, Space } from 'antd';
import Provider from '../Provider';

const Simple = () => {
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
          <Button type="primary" danger onClick={() => deactivate()}>
            DisConnect
          </Button>
          <div>
            <p>Account: {account}</p>
            {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
          </div>
        </Space>
      )}
    </Provider>
  );
};

export default Simple;
