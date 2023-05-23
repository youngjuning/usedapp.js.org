import React from 'react';
import './index.less';

const WhoAreUsing: React.FC = () => {
  const links = [
    {
      title: 'OptimismPBC',
      link: 'https://twitter.com/optimismPBC',
      logo: 'https://usedapp.io/img/projects/OptimismPBC.png'
    },
    {
      title: 'NuCypher',
      link: 'https://twitter.com/nucypher',
      logo: 'https://usedapp.io/img/projects/Nu_Cypher.png'
    },
    {
      title: 'Index Coop',
      link: 'https://twitter.com/indexcoop',
      logo: 'https://usedapp.io/img/projects/Index_Coop.png'
    },
    {
      title: 'Developer DAO',
      link: 'https://twitter.com/developer_dao',
      logo: 'https://usedapp.io/img/projects/Developer_DAO.png'
    },
    {
      title: 'Tally',
      link: 'https://twitter.com/voteWithTally',
      logo: 'https://usedapp.io/img/projects/Tally.jpeg'
    },
    {
      title: 'PoolTogether',
      link: 'https://twitter.com/PoolTogether_',
      logo: 'https://usedapp.io/img/projects/Pool_Together.png'
    },
    {
      title: 'Nouns',
      link: 'https://twitter.com/nounsdao',
      logo: 'https://usedapp.io/img/projects/Nouns.png'
    },
    {
      title: 'Status',
      link: 'https://twitter.com/ethstatus',
      logo: 'https://usedapp.io/img/projects/Status.png'
    },
    {
      title: 'Tenderize',
      link: 'https://twitter.com/tenderize_me',
      logo: 'https://usedapp.io/img/projects/Tenderize.png'
    },
    {
      title: 'Boba Network',
      link: 'https://twitter.com/bobanetwork',
      logo: 'https://usedapp.io/img/projects/Boba_Network.png'
    }
  ];

  return (
    <ul className="dumi-site-who-are-using">
      {links. map(item => (
        <li key={item.link}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <img
              src={item.logo}
              alt={item.title}
            />
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default WhoAreUsing;
