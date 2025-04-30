'use client'
import Item from "@/components/Item/Item"
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { saveStepData } from "@/service/apiService";

export  default function Question5(){
    const [values, setValues] = useState({});
    const router = useRouter();
    console.log("values",values)

    const handleSubmit = async (e) => {
            const employeeId = localStorage.getItem('employeeId');
          
            if(!employeeId) {
                console.error("Employee ID not found in localStorage.");
                return;
            }
    
            try{
                const response = await saveStepData(employeeId, "Professional Development", values);
                console.log(response.data);
                router.push('/Pages/questionInternalRecognition'); // Redireciona para a próxima página
            }catch (error) {
                console.error("Error saving step data:", error);
                alert("Erro ao salvar os dados da etapa. Tente novamente mais tarde.");
            } 

    }


     
    const questions = [
        {id: 5.1, title: "título do item", description: "Cursos Promovidos pela empresa 80 Horas 4 Pontos", value: 4},
        {id: 5.2, title: "título do item", description: "Cursos Promovidos pela empresa 40 Horas 3 Pontos", value: 3},
        {id: 5.3, title: "título do item", description: "Cursos técnicos 80 Horas 5 Pontos", value: 5},
        {id: 5.4, title: "título do item", description: "Cursos Gestão pública 20 Horas 1 Ponto", value: 1},
        {id: 5.5, title: "título do item", description: "Doutorado 10 Pontos", value: 10},
        {id: 5.6, title: "título do item", description: "Mestrado 9 Pontos",value: 9},
        {id: 5.7, title: "título do item", description: "Pós-graduação 8 Pontos",value: 8},
        {id: 5.8, title: "título do item", description: "Graduação 7 Pontos",value: 7},
    ]

    const handleCheckBoxChange = useCallback((item, score, nameCourse, description) => {
        setValues(prevValues => {
            const newValues = {
                ...prevValues,
                [item]: {description, score, nameCourse }  
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
                    value={question.value}
                    handleCheckBoxChange={handleCheckBoxChange}
                />
            ))}    
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Avançar</button>                               

        </div>
    )
}

