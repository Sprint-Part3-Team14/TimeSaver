import React, { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

interface User {
  id: number;
  nickName: string;
}

interface UserContextState {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContextState | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
