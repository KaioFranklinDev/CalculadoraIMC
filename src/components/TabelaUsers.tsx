interface TabelaUsersProps{
    key:any,
    id:any
    nome:string,
    peso:number,
    altura:number,
    imc:number,
    data:any
}
export default function TabelaUsers(props:TabelaUsersProps){
    
    return(
        <div id={props.id} className="w-full flex flex-row bg-slate-400 text-white">
                <div className="w-1/5">{props.nome}</div>
                <div className="w-1/5">{props.peso}</div>
                <div className="w-1/5">{props.altura}</div>
                <div className="w-1/5">{props.imc.toFixed(2)}</div>
                <div className="w-1/5">{props.data}</div>
        </div>
    )
}