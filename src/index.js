import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './Root'
import 'bootstrap/dist/css/bootstrap.min.css'
import './i18n'
import './icon'

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

reportWebVitals();
