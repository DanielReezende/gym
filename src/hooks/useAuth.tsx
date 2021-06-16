import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean,
  user: object | null,
  signIn(credentials: SignInCredentials): Promise<void>;
}


const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<object | null>(null);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/login', { email, password});

    setUser(response.data.user);
  }, [])

  return (
    <AuthContext.Provider value={{ 
      signed: !!user,
      user,
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
