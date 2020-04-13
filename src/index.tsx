import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './services/serviceWorker';
// @ts-ignore
import {render} from 'react-snapshot';

render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
