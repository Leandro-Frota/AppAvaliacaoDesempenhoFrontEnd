
'use client'
import RoundedButton from "@/components/button/button";
import InputLabel from "@/components/InputLabel/InputLabel";
import { useCallback, useState } from "react";

export default function Register(){

    // const [nameEmployee, setNameEmployee] = useState("");
    // const [registrationEmployee, setRegistrationEmployee] = useState("");
    // const [officeEmployee, setOfficeEmployee] = useState("");
    // const [managementEmployee, setManagementEmployee] = useState("");


    const [valuesRegister, setValuesRegister] = useState({});

    console.log(valuesRegister);       

    const captureValuesRegister = useCallback((name, value) => {
        setValuesRegister(prevValues => ({
            ...prevValues,
            [name]:  value 
        }));
    }, []);

    function onSubmit(){
        //logica para enviar os dados para o backend
        console.log("Cadastrado com sucesso")
    }


    const className = {
        input : "border-2 border-gray-300 rounded outline-none p-1 w-100"
    }
    return (
        <div className="w-3/6  p-10">
            <div className="text-start text-xl ">
                <h2 className="font-bold text-2xl">Cadastro de Funcionário</h2>
            </div>
            <div className="flex flex-col  gap-2   ">
                <form>
                    <InputLabel
                                name='name'
                                label="Nome"
                                type="text"
                                className={className.input}
                                captureValuesRegister={captureValuesRegister}
                                />
                    <InputLabel
                                name='registration'
                                label="Matrícula"
                                type="text"
                                className={className.input}
                                captureValuesRegister={captureValuesRegister}
                                />
                    <InputLabel
                                name='office'
                                label="Função"
                                type="text"
                                className={className.input}
                                captureValuesRegister={captureValuesRegister}
                                />
                    <InputLabel
                                name='management'
                                label="Gerência"
                                type="text"
                                className={className.input}
                                captureValuesRegister={captureValuesRegister}
                                /> 
                    <div className="mt-6">
                    <RoundedButton
                        text = "Cadastrar"
                        onSubmit={onSubmit}/>
                    </div>

                </form>              
            </div> 
           
             

        </div>
        
    )
}