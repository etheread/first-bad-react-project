import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Catalog from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Header/>
      <Catalog/>
    </>
);