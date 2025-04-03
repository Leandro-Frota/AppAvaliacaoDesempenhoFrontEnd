'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/Button/Button";

export  default function Question1(){
    const [values, setValues] = useState({});
    const router = useRouter();
 
    const handleRadioChange  = useCallback((item, score, justification) => {
        
        setValues(prevValues => ({
            ...prevValues,
            [item]: { score, justification }
        }));
    }, []); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        router.push('/Pages/questionTeamWork'); // Redireciona para a próxima página
    };

    const questions = [
        {id: 1.1, title: "Conhecimento técnico", description: "Descrição do item"},
        {id: 1.2, title: "Capacidade analítica", description: "Descrição do item"},
        {id: 1.3, title: "Inovação", description: "Descrição do item"},
        {id: 1.4, title: "Geração de conhecimento", description: "Descrição do item"},
        {id: 1.5, title: "Organização", description: "Descrição do item"},
    ]
    
    return (
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <h2 className="font-bold text-2xl">Quesito 1 - Prepara e Qualificação </h2>
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
                    valueItem = {0}
                    handleRadioChange = {handleRadioChange}
                />
            ))}          
            <p>Pontuação: </p>
            <ButtonSubmit onClick={handleSubmit} text="Avançar"/>                      
        </div>
    )
}