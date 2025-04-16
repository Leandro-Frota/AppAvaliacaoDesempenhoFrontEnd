'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/Button/button";
import { saveStepData } from "@/service/apiService";

export  default function Question4(){
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
            const response = await saveStepData(employeeId, "Behavior", values);
            console.log(response.data);
            router.push('/Pages/questionProfessionalDevelopment'); 
        }catch (error) {
            console.error("Error saving step data:", error);
            alert("Error saving step data. Please try again later.");
        } 
    }

    const descriptionItems = {
        description1: "O empregado demonstra equilíbrio emocional, mantendo a calma em situações de pressão e estresse.",
        description2: "Mantém um bom relacionamento interpessoal, respeitando as diferenças e promovendo um ambiente de trabalho harmonioso.",
        description3: "Demonstra iniciativa na execução de tarefas e na busca de soluções para problemas.",
        description4: "Segue normas e procedimentos estabelecidos, demonstrando comprometimento com a disciplina organizacional.",
    }

    const questions = [
        {id: 4.1, title: "Equilíbrio", description: descriptionItems.description1},
        {id: 4.2, title: "Relacionamento Interpessoal", description: descriptionItems.description2},
        {id: 4.3, title: "Iniciativa", description: descriptionItems.description3},
        {id: 4.4, title: "Disciplina", description: descriptionItems.description4},
    ]

    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl text-center">Quesito 4 - Comportamento </h2>
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