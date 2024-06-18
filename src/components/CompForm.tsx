interface CompFormProps{
    label:string,
    state:any,
    funcState:any,
    placeholder:string
}
export default function CompForm(props:CompFormProps){
    return(
        <div className="flex flex-col items-center">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} className="w-1/3 text-center" value={props.state} onChange={(e)=>props.funcState(e.target.value)}/>
        </div>
    )
}