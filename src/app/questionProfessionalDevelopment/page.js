'use client'
import Item from "@/components/Item/Item"
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export  default function Question5(){
    const [values, setValues] = useState({});
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer algo com os valores, como enviar para um servidor ou processar de alguma forma.
        console.log(values);
        router.push('/questionInternalRecognition'); // Redireciona para a próxima página
    }
     
    const questions = [
        {id: 5.1, title: "título do item", description: "Exemplo: Cursos Promovidos pela empresa 80 Horas 4 Pontos"},
        {id: 5.2, title: "título do item", description: "Exemplo: Cursos Promovidos pela empresa 40 Horas 3 Pontos"},
        {id: 5.3, title: "título do item", description: "Exemplo: Cursos técnicos 80 Horas 5 Pontos"},
        {id: 5.4, title: "título do item", description: "Exemplo: Cursos Gestão pública 20 Horas 1 Ponto"},
        {id: 5.5, title: "título do item", description: "Exemplo: Doutorado 10 Pontos"},
        {id: 5.6, title: "título do item", description: "Exemplo: Mestrado 9 Pontos"},
        {id: 5.7, title: "título do item", description: "Exemplo: Pós-graduação 8 Pontos"},
        {id: 5.8, title: "título do item", description: "Exemplo: Graduação 7 Pontos"},
    ]

    const handleCheckBoxChange = useCallback((item, score, nameCourse) => {
        setValues(prevValues => {
            const newValues = {
                ...prevValues,
                [item]: { score, nameCourse }  
            };    
            //ordenar os valores do objeto
            const sortedEntries = Object.entries(newValues)
                .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))                
                .reduce((acc, [key, val]) => {
                    acc[key] = val;
                    return acc;
                }, {});
    
            return sortedEntries;
        });
    }, []);

    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Quesito 5 - Desenvolvimento Profissional </h2>
            {questions.map((question) => (
                <Item
                    key={question.id}
                    item={question.id}
                    nameRadio={question.id}
                    title={question.title}
                    description={question.description}
                    person={false}
                    recognition = {false}
                    course
                    value={question.id}
                    handleCheckBoxChange={handleCheckBoxChange}
                />
            ))}    
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Avançar</button>                               

        </div>
    )
}

