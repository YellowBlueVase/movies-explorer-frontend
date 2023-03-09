import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {HashRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);

reportWebVitals();
