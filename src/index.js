import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './AppContext';
import { WishlistProvider } from "./WishlistContext";
import { AuthProvider, useAuth } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <AppProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </AppProvider>
  </AuthProvider>
);


