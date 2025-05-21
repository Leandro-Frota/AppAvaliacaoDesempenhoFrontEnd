'use client'
import ButtonSubmit from "@/components/Button/button";
import Item from "@/components/Item/Item"
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { saveStepData } from "@/service/apiService";
import ModalIsLoading from "@/components/IsLoadign/ModalIsLoading";

export  default function Question6(){
    const [values, setValues] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleNumberChange = useCallback((item, score, description) => {
        setValues(prevValues => ({
            ...prevValues,
            [item]: {description, score }
        }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const employeeId = localStorage.getItem('employeeId');

        if(!employeeId) {
            console.error("Employee ID not found in localStorage.");
            alert("Funcionário não identificado. Recarregue a página ou reinicie o processo.");
            setIsLoading(false);
            return;
        }

        try{
            const response = await saveStepData(employeeId, "Internal Recognition", values);
            localStorage.removeItem('employeeId');
            alert("Dados salvos com sucesso!");
            router.push('/introduction');
        }catch (error) {
            console.error("Error saving step data:", error);
            alert("Erro ao salvar os dados da etapa. Tente novamente mais tarde.");
        }finally{
            setIsLoading(false);
        }
   
    }

    const descriptionItems = {
        description1: "Realiza o trabalho de forma equilibrada, mantendo a calma em situações de pressão e estresse. Cada elogia registra um ponto positivo.",
        description2: "Trata a todos com presteza, respeito e educação, promovendo um ambiente de trabalho harmonioso. Cada honra ao mérito registra um ponto positivo.",
        }

    const  questions = [
        {id: 6.1, title: "Elogio", description: descriptionItems.description1},
        {id: 6.2, title: "Honra ao mérito", description: descriptionItems.description2},
    ]

    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            {isLoading && <ModalIsLoading isLoading={isLoading} message="Enviando Dados"/>}
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
