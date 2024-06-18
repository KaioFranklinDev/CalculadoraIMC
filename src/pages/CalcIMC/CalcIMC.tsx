import Buttons from "@/components/Buttons"
import CompForm from "@/components/CompForm"
import TabelaIMC from "@/components/TabelaIMC"
import { useState } from "react"

export default function CalcIMC(){
    const [peso,setPeso] = useState<number>(0)
    const [altura,setAltura] = useState<number>(0)
    const [IMC,setIMC] = useState<number>(0)
    function calcular(){
        let res=peso/(altura*altura)
        setIMC(res)
    }
    return(
        <div className="bg-slate-300 text-center">
            <h1 className="bg-slate-500 mb-10 font-bold text-white">Calculadora IMC</h1>
            <CompForm label='peso' state={peso} funcState={setPeso}/>
            <CompForm label='altura' state={altura} funcState={setAltura}/>
            <Buttons label="Calcular" funcBtn={calcular}/>
            <p className="pt-5">Resultado: {IMC>0?(IMC.toFixed(2)):"seu IMC"}</p>
            <TabelaIMC valueIMC={IMC}/>
        </div>
    )
}