import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice this change
import App from './App';  // Your main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
