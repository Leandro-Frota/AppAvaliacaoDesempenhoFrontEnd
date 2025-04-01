'use client'
import ButtonSubmit from "@/components/Button/button";
import Item from "@/components/Item/Item"
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export  default function Question6(){
    const [values, setValues] = useState({});
    const router = useRouter();

    const handleNumberChange = useCallback((item, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [item]: { value }
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer algo com os valores, como enviar para um servidor ou processar de alguma forma.
        console.log(values);
        router.push('/'); // Redireciona para a próxima página
    }

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
            <ButtonSubmit onClick={handleSubmit} text="Concluir"/>
        </div>
    )
}
