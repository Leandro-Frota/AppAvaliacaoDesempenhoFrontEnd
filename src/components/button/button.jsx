'use client'
export default function ButtonSubmit({text = "Button", onClick = () => {}}, Icon = ""){
    return <div
         onClick={onClick}
         className="cursor-pointer min-w-32 mt-10 h-10 px-4 bg-blue-500  flex justify-center
                     items-center rounded hover:bg-blue-800 hover: duration-500 text-white"
        Icon = {Icon}>
        {text}
    </div>
}