import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

import { Provider } from 'react-redux';
import store from './store/index';
import './app.less';

function App() {
  return <Router />;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
