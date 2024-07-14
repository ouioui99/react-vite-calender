import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Props, Value } from "../types";

export const UserAuthContext = createContext({});

export default function UserContext() {
  return <div>UserContext</div>;
}

export const UserAuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const value: Value = {
    user,
    setUser,
    loading,
    setLoading,
  };

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //       if (user) {
  //         const userCollection = await getUserCollection(user);
  //         if (!userCollection) {
  //           createUserCollection(user);
  //         }
  //         setUser(user);
  //         setLoading(false);
  //       } else {
  //         setUser("");
  //         setLoading(false);
  //       }
  //     });
  //     return () => unsubscribe();
  //   }, []);
  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};
