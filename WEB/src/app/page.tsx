import { Botao } from "@/components/Botao";

export default function Home() {
  return (
    <h1>
      Hello World
      {/* Componentes - Funções que retornam HTML */}
      <Botao/>
      
      {/* Propriedades é uma forma de passar informações a um Componente */}
      <Botao titulo='Vitu'/>
      <Botao titulo='Virtu'/>
      <Botao titulo='Vi'/>
    </h1>
  )
}
