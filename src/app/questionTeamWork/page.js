"use client"
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/Button/button";
import { saveStepData } from "@/service/apiService";
import ModalIsLoading from "@/components/IsLoadign/ModalIsLoading";

export  default function Question2(){
        const [values, setValues] = useState({});
        const [isLoading, setIsLoading] = useState(false);
        const router = useRouter();
       
        const handleRadioChange = useCallback((item, score, justification, description) => {            
            setValues(prevValues => ({
                ...prevValues,
                [item]: {description, score, justification }
            }));
        }, []);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            const employeeId = localStorage.getItem('employeeId');
 
            if(!employeeId) {
                console.error("Employee ID not found in localStorage.");
                return;
            }
 
            try{
                const response = await saveStepData(employeeId, "Team Work", values);
                console.log(response.data);
                router.push('/questionCommimentResults'); // Redireciona para a próxima página // Redireciona para a próxima página
            }catch (error) {
                console.error("Error saving step data:", error);
                alert("Erro ao salvar os dados da etapa. Tente novamente mais tarde.");
            }finally
            {
                setIsLoading(false);
            }            
        }

        const descriptionItems = { 
            description1: "O empregado mantém bom relacionamento com os colegas, respeitando as diferenças e promovendo um ambiente de trabalho harmonioso.",
            description2: "Coopera com os colegas, compartilhando informações e ajudando na resolução de problemas em equipe.",
        }
        const questions = [
            {id: 2.1, title: "Interação", description: descriptionItems.description1},
            {id: 2.2, title: "Cooperação", description: descriptionItems.description2},
        ]
    
    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            {isLoading && <ModalIsLoading isLoading={isLoading} message="Enviando Dados"/>}
            <h2 className="font-bold text-2xl text-center">Quesito 2 - Trabalho em equipe </h2> 
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

            <ButtonSubmit onClick={handleSubmit} text="Avançar" disabled={isLoading}/>    
                                                
        </div>
    )
}