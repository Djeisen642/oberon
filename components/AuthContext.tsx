import { createContext, useState, useContext, type ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  user: {
    name?: string;
    email?: string;
  };
  isLoading: boolean;
  signIn: (userData: any) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useSession() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <AuthProvider />');
  }
  return value;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name?: string; email?: string }>({});

  const signIn = async (userData: any) => {
    setLoading(true);
    // Simulate sign-in logic (replace with your actual authentication)
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoggedIn(true);
    setLoading(false);
    setUser(userData);
  };

  const signOut = () => {
    // Simulate sign-out logic
    setIsLoggedIn(false);
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ isLoading, isLoggedIn, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
