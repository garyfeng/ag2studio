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

interface IAppContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  logout: () => void;
  cookie_name: string;
  darkMode: string;
  setDarkMode: (mode: string) => void;
}

const cookie_name = "coral_app_cookie_";

export const appContext = React.createContext<IAppContext>({
  user: null,
  setUser: () => {},
  logout: () => {},
  cookie_name: "",
  darkMode: "dark",
  setDarkMode: () => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<string>('dark');
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
    console.log('Setting dark mode to:', mode);
    setDarkMode(mode);
    setLocalStorage("darkmode", mode);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', mode === 'dark');
      document.documentElement.classList.toggle('light', mode === 'light');
      document.body.style.backgroundColor = mode === 'dark' ? '#111827' : '#ffffff';
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedValue = getLocalStorage("darkmode", false);
    const initialMode = storedValue === null ? "dark" : storedValue === "dark" ? "dark" : "light";
    handleDarkModeChange(initialMode);
  }, []);

  const contextValue: IAppContext = {
    user,
    setUser,
    logout,
    cookie_name,
    darkMode,
    setDarkMode: handleDarkModeChange,
  };

  return (
    <appContext.Provider value={contextValue}>
      {children}
    </appContext.Provider>
  );
}
