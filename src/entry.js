import React from "react";
import {render} from 'react-dom';
import Router from './router';
import {Provider} from "react-redux";
import store from "./redux/store";
import './common/style.less'


render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById("root")
);
if (module.hot) {
  module.hot.accept();
}

