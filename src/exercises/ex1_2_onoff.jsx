'use client'

import { useState } from 'react'

export default function OnOff() {
 // 1. A MEMÓRIA: Define o estado inicial como desligado (false) ou ligado (true) no estado inicial quando abre a page
 const [isOn, setIsOn] = useState(false)

 return (
  <div className="flex flex-col items-center justify-center min-h-screen gap-8">
   {/* 2. O GATILHO: O '() =>' segura a execução até o clique. O '!isOn' inverte o booleano atual */}
   <button className="p-4 shadow-xl bg-blue-400 text-2xl font-bold cursor-pointer hover:scale-105 text-white rounded-2xl" onClick={() => setIsOn(!isOn)}>
    Alternar Estado
   </button>

   {/* 3. RENDERIZAÇÃO CONDICIONAL: Lê o estado atual e escolhe qual tag <p> desenhar na tela */}
   {isOn ? <p className="font-bold text-3xl text-green-400">Ligado</p> : <p className="font-bold text-3xl text-red-500">Desligado</p>}
  </div>
 )
}
