'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react";

export  default function Question4(){
    const [values, setValues] = useState({});
    const handleRadioChange = useCallback((item, score, justification) => {        
        setValues(prevValues => ({
            ...prevValues,
            [item]: { score, justification }
        }));
    }, []);

    const questions = [
        {id: 4.1, title: "título do item", description: "Descrição do item"},
        {id: 4.2, title: "título do item", description: "Descrição do item"},
        {id: 4.3, title: "título do item", description: "Descrição do item"},
        {id: 4.4, title: "título do item", description: "Descrição do item"},
    ]

    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Quesito 4 - Comportamento </h2>
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
                                                
        </div>
    )
}