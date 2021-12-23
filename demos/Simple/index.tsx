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
          连接钱包
        </Button>
      ) : (
        <Space direction="vertical" size="middle">
          <Button type="primary" danger onClick={() => deactivate()}>
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

export default Simple;
