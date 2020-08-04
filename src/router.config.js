
import Root from './App.js';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const routes = [
  {
    path: "/page1",
    exact: true,
    component: Page1,
  },
  {
    path: "/page2",
    exact: true,
    component: Page2,
  },
  // {
  //   path: "/",
  //   component: Root,
  //   exact: true,
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

export default routes;