'use client'

import dynamic from 'next/dynamic'

const RAView = dynamic(() => import('../components/views/playground/ra'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

export default function Home() {
  return (
    <main style={{ height: "100%" }} className="h-full">
      <RAView />
    </main>
  )
}
