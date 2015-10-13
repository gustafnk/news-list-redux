import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import store from './configure-store';


React.render(
  <Provider store={ store }>
    { () => <App />}
  </Provider>,
  document.getElementById('app'));
