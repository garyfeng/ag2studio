'use client'

import { useContext, useEffect } from 'react'
import { ConfigProvider, theme } from 'antd'
import { appContext, AppProvider } from '../hooks/provider'
import Header from '../components/header'
import Footer from '../components/footer'

const themeConfig = {
  light: {
    token: {
      colorPrimary: '#16a34a',
      colorBgContainer: '#ffffff',
      colorText: '#334155',
    },
    components: {
      Button: {
        primaryColor: '#16a34a',
        algorithm: false,
      },
    },
  },
  dark: {
    token: {
      colorPrimary: '#22c55e',
      colorBgContainer: '#111827',
      colorText: '#f7fafc',
    },
    components: {
      Button: {
        primaryColor: '#22c55e',
        algorithm: false,
      },
    },
  }
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { darkMode } = useContext(appContext)
  const currentTheme = darkMode === "dark" ? themeConfig.dark : themeConfig.light;

  useEffect(() => {
    // Apply dark mode to document body
    document.body.className = darkMode === "dark" ? "dark bg-primary" : "light bg-primary";
  }, [darkMode]);

  return (
    <div id="app" className={`${darkMode === "dark" ? "dark" : "light"} min-h-screen bg-primary`}>
      <AppProvider>
        <ConfigProvider
          theme={{
            ...currentTheme,
            algorithm: darkMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
          }}
          wave={{ disabled: true }}
        >
          <div className="min-h-screen bg-primary">
            <Header />
            <div className="flex-1 text-primary">
              {children}
            </div>
            <Footer />
          </div>
        </ConfigProvider>
      </AppProvider>
    </div>
  )
}
