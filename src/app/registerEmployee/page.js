
'use client'
import ButtonSubmit from "@/components/ButtonSubmit/ButtonSubmit";
import InputLabel from "@/components/InputLabel/InputLabel";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { registerEmployee } from "@/service/apiService";
import ModalIsLoading from "@/components/IsLoadign/ModalIsLoading";


export default function Register(){
    const [valuesRegister, setValuesRegister] = useState({});
    const [isloading,setIsLoading] = useState(false)

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
        setIsLoading(true)
        try {
            await registerEmployee(valuesRegister);
            const employeeId = response?.data?.employee?._id;
            console.log('employeeId', employeeId);
            if(employeeId) {
                localStorage.setItem('employeeId', employeeId);
                alert("Dados enviados");
                router.push('/questionPreparationQualification');
                return;
            }else {
                alert("Erro ao registrar funcionário. Tente novamente mais tarde.");
                return;
            }           
        } catch (error) {
            console.error("Erro ao registrar funcionário:", error);
            alert("Erro ao registrar funcionário. Tente novamente mais tarde.");
        }finally{
            setIsLoading(false)
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
            {isloading && 
              <ModalIsLoading isloading={isloading} message="Regsitrando dados"/>
            }            
            <div className="text-start text-xl">
                <h2 className="font-bold text-2xl text-center">Cadastro de Funcionário</h2>
            </div>
            <div className="flex flex-col  gap-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5">
                    <p className="text-sm text-gray-500">Preencha os dados abaixo para cadastrar o funcionário.</p>
                    {inputs.map((input) => (
                        <InputLabel
                            key={input.id}
                            name={input.name}
                            label={input.label}
                            type={input.type}
                            className={className.input}
                            captureValuesRegister={captureValuesRegister}
                            size={64}
                            required={true}
                        />
                    ))} 
                    
                    <ButtonSubmit  text="Avançar" type="submit" disabled={isloading}/>
                  
                </form>              
            </div>
        </div>       
    )
}