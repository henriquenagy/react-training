// 1. O comando import "puxa" o arquivo do exercício para dentro desta página
import ToggleExercise from '@/exercises/ex01_toggle'

export default function Home() {
 return (
  <main>
   {/* 2. Invoca o exercício importado na estrutura JSX para ele aparecer na tela */}
   <ToggleExercise />
  </main>
 )
}
