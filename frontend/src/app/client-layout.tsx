'use client'

import { useContext } from 'react'
import { ConfigProvider, theme } from 'antd'
import { appContext } from '../hooks/provider'
import Header from '../components/header'
import Footer from '../components/footer'

// Use same color for buttons in both themes
const buttonColor = '#22c55e';

const themeConfig = {
  light: {
    token: {
      colorPrimary: buttonColor,
      colorBgContainer: '#ffffff',
      colorText: '#334155',
      colorBgBase: '#ffffff',
    },
    components: {
      Button: {
        colorPrimary: buttonColor,
        colorPrimaryHover: '#1ea352',
        algorithm: false,
      },
    },
  },
  dark: {
    token: {
      colorPrimary: buttonColor,
      colorBgContainer: '#111827',
      colorText: '#f7fafc',
      colorBgBase: '#111827',
    },
    components: {
      Button: {
        colorPrimary: buttonColor,
        colorPrimaryHover: '#1ea352',
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
  const { darkMode } = useContext(appContext);
  const currentTheme = darkMode === "dark" ? themeConfig.dark : themeConfig.light;

  return (
    <ConfigProvider
      theme={{
        ...currentTheme,
        algorithm: darkMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
      wave={{ disabled: true }}
    >
      <div className="min-h-screen bg-primary">
        <Header />
        <main className="flex-1 text-primary bg-primary">
          {children}
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
