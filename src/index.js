import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './components/serviceWorker';
import { BrowserRouter } from 'react-browser-router';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
