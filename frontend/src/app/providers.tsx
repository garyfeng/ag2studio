'use client'

import { AppProvider } from '../hooks/provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>
}
