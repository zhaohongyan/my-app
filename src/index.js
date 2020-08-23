import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, NavLink } from "react-router-dom";
// import { renderRoutes } from "react-router-config";

import { createStore } from "redux";
import { Provider } from 'react-redux';

// import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from "./reducers";

import Frame from './components/Layout/Frame/index';

import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Frame />
      </Router>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
