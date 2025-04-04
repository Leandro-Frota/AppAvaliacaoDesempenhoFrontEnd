'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/Button/button";


export  default function Question3(){
    const [values, setValues] = useState({});
    const router = useRouter();
  
    const handleRadioChange = useCallback((item, score, justification) => {        
        setValues(prevValues => ({
            ...prevValues,
            [item]: { score, justification }
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer algo com os valores, como enviar para um servidor ou processar de alguma forma.
        console.log(values);
        router.push('/Pages/questionBehavior'); // Redireciona para a próxima página
    }

    const questions = [
        {id: 3.1, title: "título do item", description: "Descrição do item"},
        {id: 3.2, title: "título do item", description: "Descrição do item"},
    ]

    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Quesito 3 - Compromisso com resultados </h2> 
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