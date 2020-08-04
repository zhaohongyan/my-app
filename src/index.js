import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { matchRoutes, renderRoutes } from "react-router-config";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from './router.config';

import { Provider } from 'react-redux';
import { createStore } from "redux";
import { Divider } from "antd";

import rootReducer from "./reducers";
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div style={{ padding: "0 20px" }}>
          <h1>Hello Emma!</h1>
          <nav>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
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
