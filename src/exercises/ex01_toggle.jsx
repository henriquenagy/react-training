'use client' // 1. Obrigatório para componentes com interatividade no Next.js

import { useState } from 'react' // 2. Importa o "memorizador" de estados do React

// 3. Exporta a função principal para o page.js conseguir puxar
export default function ToggleExercise() {
 // Passo 1: A memória do componente (Você já fez na conversa anterior)
 const [isLigada, setIsLigada] = useState(false)

 // Passo 2: Crie a função alternarLampada aqui embaixo
 function ButtonColor() {
  return (
   <div className="flex items-center">
    <button>
     <span>Trocar a cor</span>
    </button>
   </div>
  )
 }
 // Passo 3: Retorne o visual no bloco return
 return <div>{/* Coloque sua tag de texto e seu botão aqui */}</div>
}
