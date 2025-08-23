"use client";

import { UserType } from "@/types/user.type";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface UserContextType {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
}

const HabitsContext = createContext<UserContextType | undefined>(undefined);

export const HabitsProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <HabitsContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
