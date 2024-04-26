import './globals.css'

import type { Metadata } from 'next'

import { fontSans } from '@/lib/fonts'
import { SEO } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    default: `${SEO.title} - ${SEO.description}`,
    template: `%s | ${SEO.title}`,
  },
}

interface RootLayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  )
}
