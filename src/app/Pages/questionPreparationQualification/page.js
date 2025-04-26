'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation";
import ButtonSubmit from "@/components/Button/Button";
import { saveStepData } from "@/service/apiService";

export  default function Question1(){
    const [values, setValues] = useState({});
    const router = useRouter();
 
    const handleRadioChange  = useCallback((item, score, justification, description) => {
        
        setValues(prevValues => ({
            ...prevValues,
            [item]: { description, score, justification }
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
            const response = await saveStepData(employeeId, "Preparation and Qualificacion", values);
            console.log(response.data);
            router.push('/Pages/questionTeamWork'); // Redireciona para a próxima página
        }catch (error) {
            console.error("Error saving step data:", error);
            alert("Erro ao salvar os dados da etapa. Tente novamente mais tarde.");
        }        
    };

   const descriptionItem = {
        description1: "O empregado demonstra conhecimento técnico e habilidades necessárias para desempenhar suas funções de forma eficaz.",
        description2: "Identifica e analisa problemas de forma lógica e estruturada, propondo soluções adequadas.",
        description3: "Inova e busca melhorias em processos, produtos ou serviços, contribuindo para a evolução da empresa.",
        description4: "Busca sistematicamente novos conhecimentos e compartilha com os colegas.",
        description5: "Organiza seu trabalho de forma eficiente, priorizando tarefas e cumprindo prazos.",
        description6: "Escuta atentivamente os outros e respeita as opiniões alheias, promovendo um ambiente de trabalho colaborativo.",
        description7: "Procura evoluir constantemente, buscando feedback e se adaptando a novas situações.",
    }

    const questions = [
        {id: 1.1, title: "Conhecimento técnico", description: descriptionItem.description1},
        {id: 1.2, title: "Capacidade analítica", description: descriptionItem.description2},
        {id: 1.3, title: "Inovação", description: descriptionItem.description3},
        {id: 1.4, title: "Geração de conhecimento",description: descriptionItem.description4},
        {id: 1.5, title: "Organização", description: descriptionItem.description5},
        {id: 1.6, title: "Comunicação", description: descriptionItem.description6},
        {id: 1.7, title: "Autodesenvolvimento", description: descriptionItem.description7},
    ]
    
    return (
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <h2 className="font-bold text-2xl text-center">Quesito 1 - Preparo e Qualificação </h2>
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