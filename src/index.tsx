import React from 'react'
//import ReactDOM from 'react-dom' устарело
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.scss";
//import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root') as HTMLElement// или !;//никогда не будет нулевым
document.body.className = "light";
createRoot(container).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);
//reportWebVitals();