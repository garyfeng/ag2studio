import { Metadata } from 'next/types'
import '../styles/global.css'
import 'antd/dist/reset.css'

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
    <html lang="en">
      <body suppressHydrationWarning>
        <div id="app">
          {children}
        </div>
      </body>
    </html>
  )
}
