export default function ButtonSubmit({text = "Button", onClick = () => {}}){
    return <div onClick={onClick} className="cursor-pointer min-w-32 h-10 px-4 bg-blue-700  flex justify-center items-center hover:rounded-full hover:bg-blue-800 hover: duration-500 text-white">
        {text}
    </div>
}