import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './app/store.js'
import App from './App.jsx';
import 'antd/dist/antd.js'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>,
);
