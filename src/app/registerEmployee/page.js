
'use client'
import ButtonSubmit from "@/components/Button/Button";
import InputLabel from "@/components/InputLabel/InputLabel";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export default function Register(){
    const [valuesRegister, setValuesRegister] = useState({});

    console.log(valuesRegister)
    const router = useRouter();  

    const captureValuesRegister = useCallback((name, value) => {
        setValuesRegister(prevValues => ({
            ...prevValues,
            [name]:  value 
        }));
    }, []);

    const className = {
        input : "border-2 border-gray-300 rounded outline-none p-1 w-100"
    }

    function handleSubmit(){
        //logica para enviar os dados para o backend

        console.log("Cadastrado com sucesso")
        router.push('/questionPreparationQualification'); // Redireciona para a próxima página
    }

    const inputs = [
        {id: 1, name: "name", label: "Nome", type: "text"},
        {id: 2, name: "registration", label: "Matrícula", type: "text"},
        {id: 3, name: "office", label: "Função", type: "text"},
        {id: 4, name: "management", label: "Gerência", type: "text"},
    ]

    return (
        <div className="w-3/6  p-10">
            <div className="text-start text-xl ">
                <h2 className="font-bold text-2xl">Cadastro de Funcionário</h2>
            </div>
            <div className="flex flex-col  gap-2   ">
                <form>
                    {inputs.map((input) => (
                        <InputLabel
                            key={input.id}
                            name={input.name}
                            label={input.label}
                            type={input.type}
                            className={className.input}
                            captureValuesRegister={captureValuesRegister}
                        />
                    ))} 
                    
                    <ButtonSubmit  text="Avançar" onClick={handleSubmit}/>
                  
                </form>              
            </div>
        </div>       
    )
}