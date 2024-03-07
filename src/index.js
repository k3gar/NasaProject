import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img src="/assets/earth-3.png" alt="earth" className="earth-image" />
    <App />
  </React.StrictMode>
);
