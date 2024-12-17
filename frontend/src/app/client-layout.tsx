'use client'

import { useContext } from 'react'
import { appContext, AppProvider } from '../hooks/provider'
import Header from '../components/header'
import Footer from '../components/footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { darkMode } = useContext(appContext)

  return (
    <div id="app" className={darkMode === "dark" ? "dark bg-primary" : "light bg-primary"}>
      <AppProvider>
        <Header />
        <div className="flex-1 text-primary">
          {children}
        </div>
        <Footer />
      </AppProvider>
    </div>
  )
}
