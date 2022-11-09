import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthService } from "../firebase/api/auth";
import { auth } from "../firebase/firebase.config";

interface AuthContextModel {
  user: User | null;
  signIn(email: string, password: string): Promise<User | null>;
  signUp(email: string, password: string): Promise<User | null>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextModel>({
  user: null,
  signIn: () => Promise.resolve(null),
  signUp: () => Promise.resolve(null),
  signOut: () => Promise.resolve(),
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("AuthContextProvider onAuthStateChanged", user);
      setUser(user);
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const res = await AuthService.signIn(email, password);
    return res?.user || null;
  };

  const signUp = async (email: string, password: string) => {
    const res = await AuthService.signUp(email, password);
    return res?.user || null;
  };

  const signOut = async () => {
    return AuthService.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
