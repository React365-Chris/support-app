import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Providers } from '@microsoft/mgt-element';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

Providers.globalProvider = new Msal2Provider({
  clientId: 'b014034a-6286-4e3e-8360-91979c064e42'
});

initializeIcons();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


