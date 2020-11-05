/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { includes } from 'lodash';
import { routes, flattenRoutes } from '../../../router.config'
import { useHistory } from 'react-router'

const { SubMenu } = Menu;

const CommonSider = () => {
  const history = useHistory();
  // console.log('his', history);
  const { location } = history;

  const [selectedKeys, handleSelectKey] = useState([location.pathname]);
  const [openKeys, handleOpenKey] = useState([`/${location.pathname.split('/')[1]}`]);
  // console.log('selectedKeys', selectedKeys);
  // console.log('openKeys', openKeys);
  let ismatch = false;
  for (const item of Object.values(flattenRoutes)) {
    if (item.path === location.pathname) {
      ismatch = true;
      break;
    }
  }
  if (!ismatch) {
    history.push('/not_found')
  }

  history.listen(location => {
    // console.log('listen', location.pathname)
    handleSelectKey([location.pathname]);
    handleOpenKey([`/${location.pathname.split('/')[1]}`])
  });
 
  /**
   * 规则：
   * 最后一层的父级 SubMenu
   * 最后一层 Menu.Item
   */
  const renderMenus = (routes) => {
    return routes.map(item => {
      if (item.routes && item.routes.length > 0) {
        return (
          <SubMenu
            key={item.path}
            title={<span>{item.icon}{item.title}</span>}
          >
            {renderMenus(item.routes)}
          </SubMenu>
        )
      } else if (!item.hideSiderPath) {
        return (
          <Menu.Item key={item.path}>
            <span>{item.icon} {item.title}</span>
          </Menu.Item>
        )
      }
    })
  }

  const handleOpen = (openKeys) => {
    handleOpenKey(openKeys);
  }

  const handleSelect = ({ selectedKeys }) => {
    handleSelectKey(selectedKeys)
  }

  const handleMenuItem = ({ key }) => {
    history.push(key);
  };

  return (
    <div>
      <Menu
        onOpenChange={handleOpen}
        onSelect={handleSelect}
        onClick={handleMenuItem}
        // style={{ width: 256 }}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        mode="inline"
        theme="dark"
      >
        {
          renderMenus(routes, handleMenuItem)
        }
      </Menu>
    </div>
  );
};

export default CommonSider;