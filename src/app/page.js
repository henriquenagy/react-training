// 1. O comando import "puxa" o arquivo do exercício para dentro desta página
import ClickCounter from '@/exercises/ex01_clickcounter'

export default function Home() {
 return (
  <main>
   {/* 2. Invoca o exercício importado na estrutura JSX para ele aparecer na tela */}
   <ClickCounter />
  </main>
 )
}
