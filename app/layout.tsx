import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" })
const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr"})

export const metadata: Metadata = {
  title: 'Peace Blogs',
  description: 'Blogs and articles from Peace Oloruntoba',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-mr bg-light dark:bg-darkfd`}>{children}</body>
    </html>
  )
}
