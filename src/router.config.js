import React from 'react'
import Root from "./App.js";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// 三剑客
import NotAuth from './pages/common/Page403';
import NotFound from './pages/common/Page404';
import Error from './pages/common/Page500';

import Page1 from "./pages/Page1";
import Page1Edit from "./pages/Page1/Edit";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5/index.tsx";
import Demo from "./pages/Demo";

/**
 * 路由规则 菜单展开需要
 * 子路由的路径一定要以父路由的路径开头
 * 如： '/page1'  ’/page1/add‘ 
 */

const commonRoutes = [
  {
    path: "/not_auth",
    title: "NotAuth",
    exact: true,
    component: NotAuth,
  },
  {
    path: "/not_found",
    title: "NotFound",
    exact: true,
    component: NotFound,
  },
  {
    path: "/error",
    title: "Error",
    exact: true,
    component: Error,
  },
];

export const routes = [
  // {
  //   path: "/",
  //   title: "Root",
  //   exact: true,
  //   component: Root,
  // },
  {
    icon: <AppstoreOutlined />,
    path: "/demo",
    title: "Demo",
    component: Demo,
  },
  {
    icon: <MailOutlined />,
    path: "/page1",
    title: "Page1",
    // component: Page1,
    routes: [
      {
        path: "/page1/list",
        title: "Page1List",
        component: Page1,
      },
      {
        path: "/page1/add",
        title: "Page1Add",
        component: Page1Edit,
      },
      {
        path: "/page1/edit/:id",
        title: "Page1Edit",
        component: Page1Edit,
      },
    ],
  },
  {
    icon: <SettingOutlined />,
    path: "/page2",
    title: "Page2",
    component: Page2,
  },
  {
    icon: <SettingOutlined />,
    path: "/page3",
    title: "Page3",
    component: Page3,
  },
  {
    icon: <SettingOutlined />,
    path: "/page4",
    title: "Page4",
    component: Page4,
  },
  {
    icon: <SettingOutlined />,
    path: "/page5",
    title: "Page5",
    component: Page5,
  },
  ...commonRoutes
];

// renderRoutes只渲染一层，所以需要展开所有路由
// 递归展开所有路由
function flattenDeep(routes) {
  const result = [];
  flatten(routes);
  function flatten(routes) {
    routes.forEach((route) => {
      if (route.routes && route.routes.length > 0) {
        flatten(route.routes);
      }
      if (typeof route.component === "function") {
        result.push(route);
      }
    });
  }

  return result;
}

export const flattenRoutes = flattenDeep(routes)

// export default flattenDeep(routes);
