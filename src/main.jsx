import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import './index.css';
import App from './App';

// Your Auth0 domain and client ID
const domain = 'dev-ktpex2cf0ta2w6gc.eu.auth0.com';
const clientId = '75SHSoZidi3stPOMGYsmrUcKXgyHinCg';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <CartProvider>
          <App />
        </CartProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
