import React, { useState, useEffect, useCallback } from "react";
import { Menu } from "antd";
import { matchRoutes } from "react-router-config";
import { routes, flattenRoutes } from '../../../router.config'
import { useHistory } from 'react-router'

const { SubMenu } = Menu;

const CommonSider = () => {
  const history = useHistory();
  // console.log('his', history);
  const { location } = history;

  const [selectedKeys, setSelectKey] = useState([]);
  const [openKeys, setOpenKey] = useState([]);
  // console.log('selectedKeys', selectedKeys);
  // console.log('openKeys', openKeys);

  // console.log('flattenRoutes', flattenRoutes);
  // console.log('location.pathname', location.pathname);
  // console.log('matchRoutes', matchRoutes(flattenRoutes, location.pathname))

  const setKey = useCallback((pathname) => {
    const branch = matchRoutes(flattenRoutes, pathname)
    if (branch && branch.length > 0) {
      if (branch[0].route.hideSiderPath) {
        handleSelectKey(branch[0].route.hideSiderPath)
      } else {
        handleSelectKey(branch[0].route.path)
      }

      if (branch[0].route.parentPath) {
        handleOpenKey(branch[0].route.parentPath)
      } else {
        handleOpenKey([branch[0].route.path])
      }
    } else {
      history.push('/not_found')
    }
  }, [history])


  const handleSelectKey = key => {
    setSelectKey([key])
  }

  const handleOpenKey = keyList => {
    setOpenKey(keyList)
  }

  useEffect(() => {
    setKey(location.pathname);
  }, [location.pathname, setKey])

  //核心是再这里监听路由变化高亮对应的菜单
  useEffect(() => {
    history.listen((location) => {
      setKey(location.pathname);
    });
  }, [history, setKey]);

  /**
   * 规则：
   * 最后一层的父级 SubMenu
   * 最后一层 Menu.Item
   */
  const renderMenus = (routes) => {
    return routes.map(item => { // eslint-disable-line
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
    setOpenKey(openKeys);
  }

  const handleSelect = ({ selectedKeys }) => {
    setSelectKey(selectedKeys)
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