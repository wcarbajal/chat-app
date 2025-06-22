import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChatApp } from './ChatApp';
import { BrowserRouter } from 'react-router';



const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <BrowserRouter>
    <ChatApp />    
  </BrowserRouter>
);
