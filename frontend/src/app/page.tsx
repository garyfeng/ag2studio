'use client'

import dynamic from 'next/dynamic'
import Providers from './providers'

const RAView = dynamic(() => import('../components/views/playground/ra'), {
  ssr: false,
})

export default function Home() {
  return (
    <Providers>
      <main style={{ height: "100%" }} className="h-full">
        <RAView />
      </main>
    </Providers>
  )
}
