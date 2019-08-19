import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import { store } from './Store/store';
import { App } from './App/app';
import './index.css';

window.store = store

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider> 
, document.getElementById('root'));

serviceWorker.unregister();
