import React from 'react';
import ReactDOM from 'react-dom';
import { Divider } from "antd";

import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { createStore } from "redux";
import { Provider } from 'react-redux';

// import App from './App';
import * as serviceWorker from './serviceWorker';

import routes from './router.config';
import { routes as firstRoutes } from './router.config';

import rootReducer from "./reducers";

import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div style={{ padding: "0 20px" }}>
          <h1>Hello Emma!</h1>
          <nav>
            {firstRoutes.map((item, index) => (
              <NavLink key={index} to={item.path}>{item.title}</NavLink>
            ))}
          </nav>
          <Divider />

          {/* kick it all off with the root route */}
          {renderRoutes(routes)}
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
