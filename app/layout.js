import Header from '@/components/common/Header'
import './globals.css'
import Footer from '@/components/common/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mediumworx',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/logo-white.png" />
      </head>
      <body className={inter.className}>
        <Header props={children} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
