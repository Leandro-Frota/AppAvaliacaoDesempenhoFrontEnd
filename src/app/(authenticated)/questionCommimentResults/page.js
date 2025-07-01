'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/ButtonSubmit/ButtonSubmit";
import { saveStepData } from "@/service/apiService";
import ModalIsLoading from "@/components/IsLoading/ModalIsLoading";


export  default function Question3(){
    const [values, setValues] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
  
    const handleRadioChange = useCallback((item, score, justification, description) => {        
        setValues(prevValues => ({
            ...prevValues,
            [item]: { description, score, justification }
        }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const employeeId = localStorage.getItem('employeeId');
   
        if(!employeeId) {
            console.error("Employee ID not found in localStorage.");
            return;
        }

        try{
            await saveStepData(employeeId, "Commiment Results", values);
            router.push('/questionBehavior'); 
        }catch (error) {
            console.error("Error saving step data:", error);
            alert("Erro ao salvar os dados da etapa. Tente novamente mais tarde.");
        }finally{
            setIsLoading(false);
        } 
    }

    const descriptionItems = {
        description1: "Concretiza os objetivos e metas estabelecidos, demonstrando comprometimento com os resultados da empresa.",
        description2: "Busca orientação e apoio quando necessário, demonstrando abertura para feedbacks e sugestões.",
        description3: "Identifica oportunidades de melhoria e propõe soluções para otimizar processos e resultados.",
    }

    const questions = [
        {id: 3.1, title: "EficiÊncia e Eficácia", description: descriptionItems.description1},
        {id: 3.2, title: "Busca Orientação", description: descriptionItems.description2},
        {id: 3.3, title: "Melhoria contínua", description: descriptionItems.description3},
    ]

    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            {isLoading && <ModalIsLoading isLoading={isLoading} message="Enviando Dados"/>}
            <h2 className="font-bold text-2xl text-center">Quesito 3 - Compromisso com resultados </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5">
                <p className="text-start">Avalie o colaborador de acordo com os critérios abaixo:</p> 
                {questions.map((question) => (
                    <Item
                        key={question.id}
                        item={question.id}
                        nameRadio={question.id}
                        title={question.title}
                        description={question.description}
                        person
                        course = {false}
                        recognition = {false}
                        handleRadioChange={handleRadioChange}
                    />
                ))}
                <ButtonSubmit type="submit" text="Avançar" disabled={isLoading}/>
            </form>
        </div>
    )
}