// 1. [NEXT.JS]: Importa as fontes otimizadas do Google e o CSS global (Tailwind)[cite: 4]
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

// 2. [NEXT.JS]: Configura as variáveis das fontes para o Tailwind ler[cite: 4]
const geistSans = Geist({
 variable: '--font-geist-sans',
 subsets: ['latin']
})

const geistMono = Geist_Mono({
 variable: '--font-geist-mono',
 subsets: ['latin']
})

// 3. [NEXT.JS]: Define o título e a descrição da aba do navegador (SEO)[cite: 4]
export const metadata = {
 title: 'Meu Projeto',
 description: 'Descrição da aplicação'
}

// 4. [REACT + JSX + TAILWIND]: A casca principal que envolve todas as páginas[cite: 4, 5]
export default function RootLayout({ children }) {
 return (
  <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
   {/* suppressHydrationWarning: evita erro vermelho causado por extensões do navegador */}
   <body className="min-h-full flex flex-col" suppressHydrationWarning>
    {/* {children} é onde o conteúdo dinâmico do seu page.js é injetado[cite: 4, 5] */}
    {children}
   </body>
  </html>
 )
}
