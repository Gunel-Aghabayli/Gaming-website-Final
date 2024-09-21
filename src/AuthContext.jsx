import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase';
import { toast } from 'react-toastify'; 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const session = supabase.auth.getSession();
    const currentUser = session?.data?.user || null;
    setUser(currentUser);
    setIsLoggedIn(!!currentUser);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const currentUser = session?.user || null;
        setUser(currentUser);
        setIsLoggedIn(!!currentUser);
      }
    );
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const logOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsLoggedIn(false);
    toast.success('Successfully logged out!', {
      position: 'top-center',
      autoClose: 1000, 
      hideProgressBar: false, 
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true, 
      progress: undefined, 
      
      theme: "colored", 
    });
  };
  
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);