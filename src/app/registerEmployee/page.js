
'use client'
import ButtonSubmit from "@/components/Button/Button";
import InputLabel from "@/components/InputLabel/InputLabel";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { registerEmployee } from "@/service/apiService";


export default function Register(){
    const [valuesRegister, setValuesRegister] = useState({});

    const router = useRouter();  

    const captureValuesRegister = useCallback((name, value) => {
        setValuesRegister(prevValues => ({
            ...prevValues,
            [name]:  value 
        }));
    }, []);

    const className = {
        input : "border-2 border-gray-300 rounded outline-2px-solid p-1 w-100"
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerEmployee(valuesRegister);

            const employeeId = response?.data?.employee?._id;

            if(employeeId) {
                localStorage.setItem('employeeId', employeeId);
                alert("Funcionário registrado com sucesso!");
                router.push('/questionPreparationQualification');
                return;
            }else {
                alert("Erro ao registrar funcionário. Tente novamente mais tarde.");
                return;
            }           
        } catch (error) {
            console.error("Erro ao registrar funcionário:", error);
            alert("Erro ao registrar funcionário. Tente novamente mais tarde.");
        }       
    }    
    
    const inputs = [
        {id: 1, name: "name", label: "Nome", type: "text"},
        {id: 2, name: "registration", label: "Matrícula", type: "text"},
        {id: 3, name: "office", label: "Função", type: "text"},
        {id: 4, name: "management", label: "Gerência", type: "text"},
    ]

    return (
        <div className="w-full  p-10">
            <div className="text-start text-xl">
                <h2 className="font-bold text-2xl text-center">Cadastro de Funcionário</h2>
            </div>
            <div className="flex flex-col  gap-2">
                <form>
                    {inputs.map((input) => (
                        <InputLabel
                            key={input.id}
                            name={input.name}
                            label={input.label}
                            type={input.type}
                            className={className.input}
                            captureValuesRegister={captureValuesRegister}
                            size={64}
                        />
                    ))} 
                    
                    <ButtonSubmit  text="Avançar" onClick={handleSubmit}/>
                  
                </form>              
            </div>
        </div>       
    )
}