import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  Theme } from './Theme';

ReactDOM.render(
  <React.StrictMode>
      <Theme>
        <App />
      </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
