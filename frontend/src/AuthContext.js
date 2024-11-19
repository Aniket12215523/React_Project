import React, {createContext,useContext,useState} from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); 

  const login = (username, password) => {
    const foundUser = users.find((u) => u.username === username && u.password === password);
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = (username, password) => {
    if (users.find((u) => u.username === username)) {
      throw new Error('User already exists'); 
    }
    const newUser = { username, password };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUser(newUser); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
