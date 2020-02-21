import React from 'react';
import './styles/index.scss';
import App from './App';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)
