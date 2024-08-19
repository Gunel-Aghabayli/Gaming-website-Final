import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './AppContext';
import { WishlistProvider } from "./WishlistContext";
import { AuthProvider, useAuth } from './AuthContext';
import { Provider } from 'react-redux';
import store from './reducers/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <AuthProvider>
  <AppProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </AppProvider>
  </AuthProvider>
  </Provider>
);


