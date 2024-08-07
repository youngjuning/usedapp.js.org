import { NavLink, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import Toc from 'dumi/theme-default/slots/Toc';
import Adsense from '../Adsense'
import React, { type FC } from 'react';
import './index.less';

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();

  if (!sidebar) return null;

  return (
    <div className="dumi-default-sidebar">
      {sidebar.map((item, i) => (
        <dl className="dumi-default-sidebar-group" key={String(i)}>
          {item.title && <dt>{item.title}</dt>}
          {item.children.map((child) => (
            <dd key={child.link}>
              <NavLink to={child.link} title={child.title} end>
                {child.title}
              </NavLink>
              {child.link === pathname && meta.frontmatter.toc === 'menu' && (
                <Toc />
              )}
            </dd>
          ))}
        </dl>
      ))}
      <Adsense
        className="adsbygoogle"
        style={{display: "block" }}
        data-ad-client="ca-pub-4963807055498900" data-ad-host="ca-host-pub-1012064661720050"
        data-override-format="true"
        data-page-url="https://pantip.com"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default Sidebar;
