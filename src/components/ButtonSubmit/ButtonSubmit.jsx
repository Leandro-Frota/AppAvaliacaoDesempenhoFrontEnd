'use client'

export default function ButtonSubmit({ text = "Button", onClick = () => {}, type = "button", disabled = false, Icon = null }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="cursor-pointer min-w-32 mt-10 h-10 px-4 bg-blue-500 flex justify-center items-center rounded hover:bg-blue-800 duration-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {Icon && <span className="mr-2">{Icon}</span>}
            {text}
        </button>
    );
}