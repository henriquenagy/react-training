'use client' // 1. Obrigatório para componentes com interatividade no Next.js[cite: 7, 8]
import { useState } from 'react' // 2. Importa o "memorizador" de estados do React[cite: 8]

// 3. Exporta a função principal para o page.js conseguir puxar[cite: 8]
export default function ExercicioToggle() {
 // Passo 1: A memória do componente (Você já fez na conversa anterior)
 const [isLigada, setIsLigada] = useState(false)

 // Passo 2: Crie a função alternarLampada aqui embaixo

 // Passo 3: Retorne o visual no bloco return
 return <div>{/* Coloque sua tag de texto e seu botão aqui */}</div>
}
