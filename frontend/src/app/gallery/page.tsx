'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import GalleryView from '../../components/views/gallery/gallery'
import { BounceLoader } from '../../components/atoms'

export default function GalleryPage() {
  return (
    <Suspense fallback={<BounceLoader />}>
      <GalleryContent />
    </Suspense>
  )
}

function GalleryContent() {
  const searchParams = useSearchParams()
  
  return (
    <main style={{ height: "100%" }} className="h-full">
      <GalleryView location={{ search: searchParams.toString() }} />
    </main>
  )
}
