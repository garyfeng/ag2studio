'use client'

import { useEffect, useContext } from 'react'
import { appContext } from '../hooks/provider'
import Header from '../components/header'
import Footer from '../components/footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { darkMode } = useContext(appContext)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.className = darkMode === "dark" ? "dark bg-primary" : "light bg-primary"
    }
  }, [darkMode])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 text-primary">
        {children}
      </div>
      <Footer />
    </div>
  )
}
