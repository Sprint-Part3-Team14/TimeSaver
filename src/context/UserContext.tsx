import React, { PropsWithChildren, useState } from "react";

interface User {
  id: number;
  nickName: string;
}

interface UserContextState {
  user: User | null;
  handleSetUserInfo: ({ userData }: { userData: User }) => void;
}

export const UserContext = React.createContext<UserContextState | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  function handleSetUserInfo({ userData }: { userData: User }) {
    setUser(userData);
  }

  return <UserContext.Provider value={{ user, handleSetUserInfo }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
