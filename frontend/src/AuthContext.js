import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Sample users data (You would normally fetch this from a database)
  const users = [
    { name: 'aniket', email: 'aniket@gmail.com', password: 'pass123' },
    { name: 'dhruv', email: 'dhruv@gamil.com', password: 'pass456' },
  ];

  // Simulated login function
  const login = async (email, password) => {
    try {
      // Check if the email and password match any user
      const loggedInUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (loggedInUser) {
        setUser(loggedInUser);
        localStorage.setItem('user', JSON.stringify(loggedInUser)); // Store in localStorage for persistence
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      throw new Error(err.message || 'Login failed');
    }
  };

  // Simulated register function (always successful)
  const register = async (name, email, password) => {
    try {
      // You can optionally handle saving the data here, but we'll just show success for now
      console.log('Registered user:', { name, email, password });
      setUser({ name, email }); // Simulating a logged-in user after registration
      localStorage.setItem('user', JSON.stringify({ name, email })); // Store in localStorage
    } catch (err) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ login, logout, register, user }}>
      {children}
    </AuthContext.Provider>
  );
};