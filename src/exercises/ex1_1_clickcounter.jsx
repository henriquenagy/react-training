'use client' // Obrigatório para componentes com interatividade no Next.js

import { useState } from 'react' // Importa o "memorizador" de estados do React

// Exporta a função principal para o page.js conseguir puxar
export default function ClickCounter() {
 const [initialCounter, setInitialCounter] = useState(0)
 return (
  <div className="flex flex-col items-center justify-center min-h-screen gap-4">
   <p className="text-center text-2xl font-medium">Número atual: {initialCounter}</p>
   <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200 active:scale-95 shadow-md hover:shadow-indigo-500/30 cursor-pointer" onClick={() => setInitialCounter(initialCounter + 1)}>
    ADICIONAR
   </button>
  </div>
 )
}
