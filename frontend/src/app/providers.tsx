'use client'

import { AppProvider } from '../hooks/provider'
import ClientLayout from './client-layout'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
      <ClientLayout>
        {children}
      </ClientLayout>
    </AppProvider>
  )
}
