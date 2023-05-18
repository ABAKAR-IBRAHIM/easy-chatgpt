
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy Chatgpt',
  description: 'Chat with chatgpt without restrictions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar/>
      <body  suppressHydrationWarning={true} className={`${inter.className} bg-gray-800 bg-background font-sans flex flex-col h-screen overflow-hidden `}>{children}</body>
    </html>
  )
}
