import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MenuProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MenuProvider>
    <App />
  </MenuProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
