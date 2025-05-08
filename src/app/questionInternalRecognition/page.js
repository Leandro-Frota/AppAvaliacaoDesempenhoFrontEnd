'use client'
import ButtonSubmit from "@/components/Button/button";
import Item from "@/components/Item/Item"
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { saveStepData } from "@/service/apiService";

export  default function Question6(){
    const [values, setValues] = useState({});
    const router = useRouter();

    const handleNumberChange = useCallback((item, value, description) => {
        setValues(prevValues => ({
            ...prevValues,
            [item]: {description, value }
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
            const response = await saveStepData(employeeId, "Internal Recognition", values);
            console.log(response.data);
            router.push('/introduction'); // Redireciona para a próxima página
            alert("Dados salvos com sucesso!");
        }catch (error) {
            console.error("Error saving step data:", error);
            alert("Erro ao salvar os dados da etapa. Tente novamente mais tarde.");
        }
   
    }

    const descriptionItems = {
        description1: "Realiza o trabalho de forma equilibrada, mantendo a calma em situações de pressão e estresse.",
        description2: "Trata a todos com presteza, respeito e educação, promovendo um ambiente de trabalho harmonioso.",
        }

    const  questions = [
        {id: 6.1, title: "Elogio", description: descriptionItems.description1},
        {id: 6.2, title: "Honra ao mérito", description: descriptionItems.description2},
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
