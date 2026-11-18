// 1. O import puxa o componente. Use sempre o atalho @/ para apontar para a pasta src/ e não use a extensão .jsx
import Mirror from '@/exercises/ex_1_3_mirror'

export default function Home() {
 return (
  <main className="p-10">
   {/* 2. Invoca o componente importado como se fosse uma tag HTML */}
   <Mirror />
  </main>
 )
}
