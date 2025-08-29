// context/AuthContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";
import bcrypt from "bcryptjs";
import { useLocalStorage } from "@/components/shared/hooks/useLocalStorage";
import {
  UserLoginCredsType,
  UserRegisterCredsType,
  UserType,
} from "@/types/user.type";
import { HabitType } from "@/app/(home)/components/habits/habit.type";

/* --------------------------- Helpers --------------------------- */
const generateToken = () =>
  Math.random().toString(36).substring(2) + Date.now().toString(36);

const REFRESH_TOKEN_KEY = "refreshToken";

const storeRefreshToken = (token: string) =>
  Cookies.set(REFRESH_TOKEN_KEY, token, { secure: true, sameSite: "Strict" });
const getRefreshToken = () => Cookies.get(REFRESH_TOKEN_KEY);
const removeRefreshToken = () => Cookies.remove(REFRESH_TOKEN_KEY);

/* --------------------------- Types --------------------------- */
type LoginResponse = {
  success: boolean;
  user?: UserType | null;
  errors?: {
    username?: string;
    password?: string;
    general?: string;
  };
};

interface AuthContextType {
  accessToken: string | null;
  user: UserType | null;
  isLoggedIn: boolean;
  login: (creds: UserLoginCredsType) => Promise<LoginResponse>;
  register: (creds: UserRegisterCredsType) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => void;
}

/* --------------------------- Context --------------------------- */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Local storage hooks
  const { getItem, setItem, removeItem } =
    useLocalStorage<string>("accessToken");
  const {
    getItem: getUserItem,
    setItem: setUserItem,
    removeItem: removeUserItem,
  } = useLocalStorage<UserType>("currentUser");

  // State
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  /* --------------------------- Rehydrate --------------------------- */
  useEffect(() => {
    const storedAccessToken = getItem();
    const storedUser = getUserItem();

    if (storedAccessToken) setAccessToken(storedAccessToken);
    if (storedUser) setUser(storedUser);
  }, []);

  const isLoggedIn = Boolean(accessToken && user);

  /* --------------------------- Actions --------------------------- */
  const login = async (creds: UserLoginCredsType): Promise<LoginResponse> => {
    const storedUser = getUserItem();

    if (!storedUser) {
      console.log("entered");

      return {
        success: false,
        errors: { general: "Invalid Username or password" },
      };
    }
    if (creds.username !== storedUser.username) {
      return {
        success: false,
        errors: { username: "Invalid Username or password" },
      };
    }

    const passwordMatch = await bcrypt.compare(
      creds.password,
      storedUser.password
    );
    if (!passwordMatch) {
      return {
        success: false,
        errors: { password: "Invalid Username or password" },
      };
    }

    const newAccessToken = generateToken();
    const newRefreshToken = generateToken();

    setAccessToken(newAccessToken);
    setItem(newAccessToken);
    setUser(storedUser);

    storeRefreshToken(newRefreshToken);

    return { success: true, user: storedUser };
  };

  const register = async (creds: UserRegisterCredsType) => {
    if (creds.password !== creds.repeatPassword) {
      throw new Error("Passwords do not match");
    }

    const hashedPassword = await bcrypt.hash(creds.password, 10);
    const newUser: UserType = {
      username: creds.username,
      password: hashedPassword,
      gender: creds.gender,
      profilePhoto: "",
      level: 1,
      totalXp: 0,
      longestStreak: 0,
      habites: [] as HabitType[],
    };

    setUserItem(newUser);
    setUser(newUser);

    await login({ username: creds.username, password: creds.password });
  };

  const logout = () => {
    setAccessToken(null);
    setUser(null);

    removeItem();
    removeUserItem();
    removeRefreshToken();
  };

  const refreshAccessToken = () => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return logout();

    const newAccessToken = generateToken();
    setAccessToken(newAccessToken);
    setItem(newAccessToken);
  };

  /* --------------------------- Provider --------------------------- */
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isLoggedIn,
        login,
        register,
        logout,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/* --------------------------- Hook --------------------------- */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
