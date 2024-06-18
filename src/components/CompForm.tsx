interface CompFormProps{
    label:string,
    state:any,
    funcState:any
}
export default function CompForm(props:CompFormProps){
    return(
        <div className="flex flex-col items-center">
            <label>{props.label}</label>
            <input className="w-1/3 text-center" value={props.state} onChange={(e)=>props.funcState(e.target.value)}/>
        </div>
    )
}