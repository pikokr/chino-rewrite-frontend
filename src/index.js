import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './Root'
import './style.css'
import './i18n'
import './icon'
import store from './store'
import { Provider } from 'react-redux';
import './Socket'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import config from './config.json'

const {IMP} = window

IMP.init(config.payment.id)

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
