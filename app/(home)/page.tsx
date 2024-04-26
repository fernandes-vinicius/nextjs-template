import type { Metadata } from 'next'

import { HelloWorld } from './_components/hello-world'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <main className="relative flex h-screen items-center justify-center p-6 text-center">
      <HelloWorld />
    </main>
  )
}
