import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    //onAuthStateChange
    // setTimeout(() => {
    //   setIsAuthenticated(true);
    // }, 3000);
    setIsAuthenticated(false);
  }, []);

  const login = (email, password) => {
    try {
      //some thing
    } catch (e) {
      //Somethising
    }
  };

  const logout = () => {
    try {
      //some thing
    } catch (e) {
      //Somethising
    }
  };

  const register = (email, password, username, profileUrl) => {
    try {
      //some thing
    } catch (e) {
      //Somethising
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be wrapped inside AuthContextProvider");
  }

  return value;
};
