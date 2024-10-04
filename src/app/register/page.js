
'use client'
import InputLabel from "@/components/InputLabel/InputLabel";

export default function Register(){
    const className = {
        input : "border-2 border-gray-300 rounded outline-none p-1 w-100"
    }
    return (
        <div className="w-3/6  p-10">
            <div className="text-start text-xl ">
                <h2 className="font-bold text-2xl">Cadastro de Funcionário</h2>
            </div>
            <div className="flex flex-col  gap-2   ">
                <InputLabel
                            label="Nome"
                            type="text"
                            className={className.input}/>
                <InputLabel
                            label="Matrícula"
                            type="number"
                            className={className.input}/>
                <InputLabel
                            label="Função"
                            type="text"
                            className={className.input}/>
                <InputLabel
                            label="Gerência"
                            type="text"
                            className={className.input}/>               
            </div>  

        </div>
        
    )
}