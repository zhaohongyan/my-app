import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';

import { HashRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import rootReducer from "./reducers";

import Frame from './components/Layout/Frame/index';

import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.css';

// moment.locale('en');
moment.locale('zh-cn'); // 中文

const store = createStore(rootReducer);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <ConfigProvider locale={zhCN}>
        <Frame />
      </ConfigProvider>
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
