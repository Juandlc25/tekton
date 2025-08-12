import React, { useState, useEffect, type ReactNode } from "react";
import type { AuthenticationState } from "../types";
import { AuthenticationContext } from "./AuthenticationContextDef";
import LoadingSpinner from "../components/LoadingSpinner";

interface AuthenticationProviderProps {
  children: ReactNode;
}

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
    setIsInitialized(true);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      if (email && password) {
        const fakeToken = `fake-token-${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)}`;
        setToken(fakeToken);
        setIsAuthenticated(true);
        localStorage.setItem("authToken", fakeToken);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
  };

  const value: AuthenticationState = {
    isAuthenticated,
    token,
    login,
    logout,
    isInitialized,
  };

  if (!isInitialized) {
    return <LoadingSpinner message="Loading..." />;
  }

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
