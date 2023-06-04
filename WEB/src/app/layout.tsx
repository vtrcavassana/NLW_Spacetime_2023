import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

// Variáveis das fontes que estamos utilizando na aplicação Frontend
// 'variable' - ao importar a fonte, é criada uma variável '--font-nome'
const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* Aplicação vai usar a Roboto_Flex e Bai_Jamjuree, se não conseguir, vai aplicar a 'font-sans'*/}
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}
