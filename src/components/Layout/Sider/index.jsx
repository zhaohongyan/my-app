import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { includes } from 'lodash'
import { routes } from '../../../router.config'
import { useHistory } from 'react-router'

const { SubMenu } = Menu;

const CommonSider = () => {
  const history = useHistory();

  // 为了保证刷新时高亮当前菜单，需要手动控制selectedKeys，openKeys
  const [selectedKeys, handleSelectKey] = useState([]);
  const [openKeys, handleOpenKey] = useState([]);
  console.log('selectedKeys', selectedKeys);
  console.log('openKeys', openKeys)

  const autorun = () => {
    const pathname = history.location.pathname;
    // console.log('pathname', pathname);
    handleSelectKey([pathname]);
    const pathList = pathname.split('/')
    if (pathList.length !== 2) {
      handleOpenKey([`sub_/${pathList[1]}`])
    } else {
      handleOpenKey([`/${pathList[1]}`])
    }
  }

  useEffect(() => {
    autorun();
  }, []);
 
  /**
   * 规则：
   * 第一层 SubMenu
   * 第二层 Menu.Item
   */
  const renderMenu = (routes) => {
    // 递归
    const flattenMenu = (list) => {
      const menuItemDOMList = []
      list.map((item) => {
        menuItemDOMList.push(
          <Menu.Item key={item.path}>{item.title}</Menu.Item>
        )
      }) 
      return menuItemDOMList;
    }
    
    return routes.map(item => {
      if (item.routes && item.routes.length > 0) {
        return (
          <SubMenu
            key={`sub_${item.path}`}
            title={<span>
              {item.icon}
              {item.title}
            </span>}
            onTitleClick={clickSubMenu}
          >
            {/* <Menu.ItemGroup key={`group_${item.title}`} title={item.title}> */}
              {flattenMenu(item.routes)}
            {/* </Menu.ItemGroup> */}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.path}>
            <span>{item.icon} {item.title}</span>
          </Menu.Item>
        )
      }
    })
  }

  const handleClick = ({ item }) => {
    const { eventKey } = item.props;
    history.push(eventKey);
    handleSelectKey([eventKey]);
    const pathList = eventKey.split('/')
    if (pathList.length !== 2) {
      handleOpenKey([`sub_/${pathList[1]}`])
    } else {
      handleOpenKey([`/${pathList[1]}`])
    }
  };

  const clickSubMenu = ({ key }) => {
    const real_key = key.split('_')[1]
    handleSelectKey([real_key]);
    if (includes(openKeys, key)) {
      handleOpenKey([]);
    } else {
      handleOpenKey([key]);
    }
  }

  return (
    <div>
      <Menu
        onClick={handleClick}
        // style={{ width: 256 }}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        mode="inline"
        theme="dark"
      >
        {
          renderMenu(routes)
        }
      </Menu>
    </div>
  );
};

export default CommonSider;