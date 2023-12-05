import { Inter } from 'next/font/google'
import './globals.css'
import './overrides.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChaTesch',
  description: 'Developed by Pedro Tesch',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
