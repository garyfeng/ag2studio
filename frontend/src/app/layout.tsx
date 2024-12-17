import '../styles/global.css'
import 'antd/dist/reset.css'
import { Metadata } from 'next'
import ClientLayout from './client-layout'

export const metadata: Metadata = {
  title: 'AG2 Studio',
  description: 'Build LLM Enabled Agents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning className="h-full">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
