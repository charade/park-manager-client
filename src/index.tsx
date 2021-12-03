import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  Theme } from './Theme';
import { store } from './state';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <Theme>
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
