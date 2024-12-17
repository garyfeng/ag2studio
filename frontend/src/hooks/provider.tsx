'use client'

import React, { useState, useEffect } from "react";
import {
  eraseCookie,
  getLocalStorage,
  setLocalStorage,
} from "../components/utils";
import { message } from "antd";

export interface IUser {
  name: string;
  email?: string;
  username?: string;
  avatar_url?: string;
  metadata?: any;
}

export interface AppContextType {
  user: IUser | null;
  setUser: any;
  logout: any;
  cookie_name: string;
  darkMode: string;
  setDarkMode: any;
}

const cookie_name = "coral_app_cookie_";

export const appContext = React.createContext<AppContextType>(
  {} as AppContextType
);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState('light')
  const [user, setUser] = useState<IUser | null>({
    name: "Guest User",
    email: "guestuser@gmail.com",
  });

  const logout = () => {
    setUser(null);
    eraseCookie(cookie_name);
    console.log("Please implement your own Sign out logic");
    message.info("Please implement your own Sign out logic");
  };

  const handleDarkModeChange = (mode: string) => {
    setDarkMode(mode);
    setLocalStorage("darkmode", mode);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedValue = getLocalStorage("darkmode", false);
    const initialMode = storedValue === null ? "light" : storedValue === "dark" ? "dark" : "light";
    handleDarkModeChange(initialMode);
  }, []);

  return (
    <appContext.Provider
      value={{
        user,
        setUser,
        logout,
        cookie_name,
        darkMode,
        setDarkMode: handleDarkModeChange,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
