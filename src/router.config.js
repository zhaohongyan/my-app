
// import Root from './App.js';
import Page1 from './pages/Page1';
import Page1Edit from './pages/Page1/Edit';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from "./pages/Page4";

const routes = [
  {
    path: "/page1",
    component: Page1,
    routes: [
      {
        path: "/page1/add",
        component: Page1Edit,
      },
      {
        path: "/page1/edit/:id",
        component: Page1Edit,
      },
    ],
  },
  {
    path: "/page2",
    component: Page2,
  },
  {
    path: "/page3",
    component: Page3,
  },
  {
    path: "/page4",
    exact: true,
    component: Page4,
  },
  // {
  //   path: "/",
  //   component: Root,
  //   exact: false,
  //   routes: [
  //     {
  //       path: "/child/:id",
  //       component: Child,
  //       routes: [
  //         {
  //           path: "/child/:id/grand-child",
  //           component: GrandChild,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// renderRoutes只渲染一层，需要展开所有路由
// 递归展开所有路由
function flattenDeep(routes){
  const result = [];
  flatten(routes);
  function flatten (routes) {
    routes.forEach((route) => {
      if (route.routes && route.routes.length > 0) {
        flatten(route.routes);
      }
      result.push(route);
    });
  }

  return result;
}


export default flattenDeep(routes);