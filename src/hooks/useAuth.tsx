import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode
}

interface SignInCredentials {
  username: string;
  password: string;
}


interface AuthContextData {
  signed: boolean,
  token: Token | null,
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface Token {
  Authorization: string;
}

const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({ children }: AuthProviderProps){
  const [token, setToken] = useState<Token | null>(null);

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('/login', { username, senha: password });

    setToken(response.data);
  }, [])

  return (
    <AuthContext.Provider value={{ 
      signed: !!token,
      token,
      signIn,
    }}>
      { children }
    </AuthContext.Provider>
  )
}


export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(' useAuth must be used within an authProvider ');
  }

  return context;
}
