'use client'
import Item from "@/components/Item/Item"
import { useState, useCallback } from "react";

export  default function Question6(){
    const [values, setValues] = useState({});
    console.log(values);

    const handleNumberChange = useCallback((item, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [item]: { value }
        }));
    }, []);

    const  questions = [
        {id: 6.1, title: "Reconhecimento", description: "Elogio : Realiza o trabalho...."},
        {id: 6.2, title: "Honra ao mérito", description: "Descrição do item"},
    ]

    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Quesito 6 - Reconhecimento interno </h2>
            {questions.map((question) => (
                <Item
                    key={question.id}
                    item={question.id}
                    nameRadio={question.id}
                    title={question.title}
                    description={question.description}
                    person={false}
                    course = {false}
                    recognition = {true}
                    handleNumberChange={handleNumberChange}
                />
            ))} 
        </div>
    )
}
