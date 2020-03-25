// support for IE9+
import 'react-app-polyfill/ie9';

import React from 'react';
import './index.scss';
import App from './App';
import {render} from 'react-snapshot';

render(<App/>, document.getElementById('root'));
