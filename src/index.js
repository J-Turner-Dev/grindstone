import React from 'react';
import './App.scss';
import { render } from 'react-dom';
import { App } from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
