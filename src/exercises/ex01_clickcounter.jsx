'use client' // Obrigatório para componentes com interatividade no Next.js

import { useState } from 'react' // Importa o "memorizador" de estados do React

// Exporta a função principal para o page.js conseguir puxar
export default function ClickCounter() {
 const [initialCounter, getFunctionCounter] = useState(0)
 return (
  <div flex-col>
   <button>Aumentar contador</button>
   <p>Número atual:</p>
  </div>
 )
}
