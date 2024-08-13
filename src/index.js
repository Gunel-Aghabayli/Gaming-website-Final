import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './AppContext';
import { WishlistProvider } from "./WishlistContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </AppProvider>
);


