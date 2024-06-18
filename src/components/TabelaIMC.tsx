interface TabaleIMCProps{
    valueIMC : number
}
export default function TabelaIMC(props:TabaleIMCProps){
    let i = props.valueIMC
    return(
        <div className="pt-10 text-white">
            <div >
                <div className="bg-slate-500">Classificação</div>
            </div>
            <div className={"border-2 " + (props.valueIMC<18.5 && props.valueIMC>0?"bg-red-500":"bg-slate-400")} >
                <div>Abaixo do peso</div>
                <div>Inferior a 18,5</div>
            </div>
            <div className={"border-2 " + (props.valueIMC<=24.9 && props.valueIMC>=18.5?"bg-green-500":"bg-slate-400")}>
                <div>Peso Normal</div>
                <div>Entre 18,5 e 24,9</div>
            </div>
            <div className={"border-2 " + (props.valueIMC<=29.9 && props.valueIMC>=25?"bg-red-400":"bg-slate-400")}>
                <div>Sobre Peso</div>
                <div>Entre 25 e 29.9</div>
            </div>
            <div className={"border-2 " + (props.valueIMC<=34.9 && props.valueIMC>=30?"bg-red-500":"bg-slate-400")}>
                <div>Obesidade Grau I</div>
                <div>Entre 30 e 34,9</div>
            </div>
            <div  className={"border-2 " + (props.valueIMC<=39.9 && props.valueIMC>=35?"bg-red-600":"bg-slate-400")}>
                <div>Obesidade Grau II</div>
                <div>Entre 35 e 39,9</div>
            </div>
            <div className={"border-2 " + (props.valueIMC>=40?"bg-red-700":"bg-slate-400")}>
                <div>Obesidade Grau III</div>
                <div>Superior que 40</div>
            </div>
        </div>
    )
}