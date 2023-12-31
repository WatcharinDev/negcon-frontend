import type { Metadata } from 'next'
import { Inter,  Noto_Sans_Thai, Sarabun } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const openSans = Noto_Sans_Thai({
  subsets: ['latin'],
  variable: "--font-noto-sans-thai",
  display: "swap",
  preload: true
})

type Props = {
  children: React.ReactNode
}
 const RootLayout=({ children }: Props)=> {
  return (
    <html lang="th" className={openSans.className}>
      <body className={ `${openSans.variable} text-red-700`}>{children}</body>
    </html>
  )
}
export default RootLayout
