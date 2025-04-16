'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/Button/button";
import { saveStepData } from "@/service/apiService";


export  default function Question3(){
    const [values, setValues] = useState({});
    const router = useRouter();
  
    const handleRadioChange = useCallback((item, score, justification) => {        
        setValues(prevValues => ({
            ...prevValues,
            [item]: { score, justification }
        }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employeeId = localStorage.getItem('employeeId');
   
        if(!employeeId) {
            console.error("Employee ID not found in localStorage.");
            return;
        }

        try{
            const response = await saveStepData(employeeId, "Compromisso com resultados", values);
            console.log(response.data);
            router.push('/Pages/questionBehavior'); 
        }catch (error) {
            console.error("Error saving step data:", error);
            alert("Error saving step data. Please try again later.");
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
            <h2 className="font-bold text-2xl text-center">Quesito 3 - Compromisso com resultados </h2> 
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
            <ButtonSubmit onClick={handleSubmit} text="Avançar"/>
        </div>
    )
}