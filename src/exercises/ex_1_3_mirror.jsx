'use client'

import { useState } from 'react'

export default function Mirror() {
 // 1. A MEMÓRIA: Começa como string vazia ('') para armazenar texto
 const [texto, setTexto] = useState('')

 return (
  <div className="flex flex-col items-center justify-center min-h-screen gap-8">
   {/* 2. INPUT CONTROLADO (Two-Way Data Binding): */}
   <input
    type="text"
    // value: Sincroniza o visual da caixa com o valor atual da memória (texto)
    value={texto}
    // onChange: Captura o evento de digitação (o povo usa só a letra 'e' mesmo ao invés de event), pega o texto novo (e.target.value) e atualiza a memória
    onChange={event => setTexto(event.target.value)}
    placeholder="Digite algo..."
    className="border p-2 rounded text-3xl"
   />

   {/* 3. O ESPELHO: Lê a memória atualizada em tempo real e imprime na tela */}
   <p className="text-4xl">Espelho = {texto}</p>
  </div>
 )
}
