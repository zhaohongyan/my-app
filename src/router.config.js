import Root from "./App.js";
import Page1 from "./pages/Page1";
import Page1Edit from "./pages/Page1/Edit";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5/index.tsx";

export const routes = [
  {
    path: "/",
    title: "Root",
    exact: true,
    component: Root,
  },
  {
    path: "/page1",
    title: "Page1",
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
    title: "Page2",
    component: Page2,
  },
  {
    path: "/page3",
    title: "Page3",
    component: Page3,
  },
  {
    path: "/page4",
    title: "Page4",
    component: Page4,
  },
  {
    path: "/page5",
    title: "Page5",
    component: Page5,
  },
];

// renderRoutes只渲染一层，需要展开所有路由
// 递归展开所有路由
function flattenDeep(routes) {
  const result = [];
  flatten(routes);
  function flatten(routes) {
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
