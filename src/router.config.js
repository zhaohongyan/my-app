import React from 'react'
import Root from "./App.js";
import {
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// 三剑客
import NotAuth from './pages/common/Page403';
import NotFound from './pages/common/Page404';
import Error from './pages/common/Page500';

// 业务页面
import Login from './pages/Login'
import Home from "./pages/Demo";
import Page1 from "./pages/Page1";
import Page1Edit from "./pages/Page1/Edit";
import Page1Detail from './pages/Page1/Detail'
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page6Edit from './pages/Page6/edit';
import Page6Detail from './pages/Page6/detail'

// demo
import ReactDemo from './pages/ReactDemo'

const commonRoutes = [
  {
    path: "/not_auth",
    title: "NotAuth",
    hideSiderPath: true,
    exact: true,
    component: NotAuth,
  },
  {
    path: "/not_found",
    title: "NotFound",
    hideSiderPath: true,
    exact: true,
    component: NotFound,
  },
  {
    path: "/error",
    title: "Error",
    hideSiderPath: true,
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
    icon: <HomeOutlined />,
    path: "/demo",
    title: "DEMO",
    component: ReactDemo,
  },
  {
    icon: <HomeOutlined />,
    path: "/login",
    title: "Login",
    component: Login,
  },
  {
    icon: <HomeOutlined />,
    path: "/home",
    title: "Home",
    component: Home,
  },
  {
    icon: <SettingOutlined />,
    path: "/page1",
    title: "Page1",
    // component: Page1,
    routes: [
      {
        parentPath: ["/page1"],
        path: "/page1/list",
        title: "Page1List",
        component: Page1,
      },
      {
        parentPath: ["/page1"],
        hideSiderPath: "/page1/list",
        path: "/page1/add",
        title: "Page1Add",
        component: Page1Edit,
      },
      {
        parentPath: ["/page1"],
        hideSiderPath: "/page1/list",
        path: "/page1/edit/:id",
        title: "Page1Edit",
        component: Page1Edit,
      },
      {
        parentPath: ["/page1"],
        hideSiderPath: "/page1/list",
        path: "/page1/detail/:id",
        title: "Page1Detail",
        component: Page1Detail,
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
  {
    icon: <SettingOutlined />,
    path: "/page6",
    title: "Page6",
    component: Page6,
    exact: true,
  },
  {
    parentPath: ["/page6"],
    hideSiderPath: '/page6',
    title: '新增编辑博客',
    path: "/page6/edit/:id?",
    component: Page6Edit,
  },
  {
    parentPath: ["/page6"],
    hideSiderPath: '/page6',
    title: '博客详情',
    path: "/page6/detail/:id",
    component: Page6Detail,
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
