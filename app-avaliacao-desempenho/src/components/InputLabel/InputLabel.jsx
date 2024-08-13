export default function InputLabel({label,type}){
    return (
        <div className="flex flex-col gap-2">
            <label  >{label}</label>
            <input type={type} className="border-2 border-gray-300 rounded outline-none p-1 w-100" />
        </div>
    )
}