// 1. O comando import "puxa" o arquivo do exercício para dentro desta página
import OnOff from '@/exercises/ex1_2_onoff'

export default function Home() {
 return (
  <main>
   {/* 2. Invoca o exercício importado na estrutura JSX para ele aparecer na tela */}
   <OnOff />
  </main>
 )
}
