import Navegador from "@/components/Navegador"
import Link from "next/link"

export default function Inicio(){
  return (
    <div style={{
      display: 'flex', 
      justifyContent:'center',
      alignItems:'center',
      flexWrap: 'wrap',
      height:'100vh'
    }}>
      <Navegador texto= "Estiloso" destino='estiloso'/>
      <Navegador texto= "Exemplo" destino='exemplo' cor='#9400d3'/>
      <Navegador texto= "JSX" destino='jsx' cor= 'crimson'/>
      <Navegador texto= "Navegacao #01" destino='/navegacao/' cor= 'green'/>
      <Navegador texto= "Navegacao #02" destino='/cliente/sp-2/321' cor= 'blue'/>
      <Navegador texto= "Componente com Estado" destino='/estado' cor= 'pink'/>
      <Navegador texto= "Integração com API #01" destino='/integracao_1' cor= 'yellow'/>
    </div>
  )
}