import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { Container } from '@/components/Styles/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LandiHomes',
  description: 'Book your Favorites home today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Container className="">
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
