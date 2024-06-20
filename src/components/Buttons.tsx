interface ButtonsProps {
    label: string,
    funcBtn: any
}
export default function Buttons(props: ButtonsProps) {
    return (
        <button 
            className=" w-[200px] mt-3  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={props.funcBtn}>
                {props.label}
        </button>
    )
}