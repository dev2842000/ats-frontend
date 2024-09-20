// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userId');
    if (storedUser) {
        console.log(storedUser);
        
      setUser(storedUser);
    }
  }, []);

  const login = (userId) => {
    setUser(userId);
    localStorage.setItem('userId', JSON.stringify(userId));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userId');
    localStorage.removeItem('authToken'); // Also remove the token
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
