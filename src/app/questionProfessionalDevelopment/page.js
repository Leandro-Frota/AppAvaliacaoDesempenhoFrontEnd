'use client'
import Item from "@/components/Item/Item"
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { saveStepData } from "@/service/apiService";
import ModalIsLoading from "@/components/IsLoadign/ModalIsLoading";
import ButtonSubmit from "@/components/ButtonSubmit/ButtonSubmit";

export  default function Question5(){
    const [values, setValues] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            const employeeId = localStorage.getItem('employeeId');
          
            if(!employeeId) {
                console.error("Employee ID not found in localStorage.");
                return;
            }
    
            try{
                const response = await saveStepData(employeeId, "Professional Development", values);
                router.push('/questionInternalRecognition'); // Redireciona para a próxima página
            }catch (error) {
                console.error("Error saving step data:", error);
                alert("Erro ao salvar os dados da etapa. Tente novamente mais tarde.");
            }finally{
                setIsLoading(false);
            }
    }

    const questions = [
        {id: 5.1, title: "Cursos Promovidos pela empresa", description: "Conteúdo dentro da área de atuação com carga horária de 80 Horas (4 Pontos)", value: 4},
        {id: 5.2, title: "Cursos Promovidos pela empresa", description: "Conteúdo dentro da área de atuação com carga horária de 40 Horas (2 Pontos)", value: 2},
        {id: 5.3, title: "Cursos técnicos", description: "Conteúdo dentro da área de atuação, a expensas do funcionários, com carga horária de 80 Horas (5 Pontos)", value: 5},
        {id: 5.4, title: "Cursos da EGP", description: "Conteúdo dentro da área de atuação com carga horária de 20 Horas 1 Ponto", value: 1},
        {id: 5.5, title: "Outros cursos", description: "Doutorado 10 Pontos", value: 10},
        {id: 5.6, title: "Outros cursos", description: "Mestrado 9 Pontos",value: 9},
        {id: 5.7, title: "Outros cursos", description: "Pós-graduação 8 Pontos",value: 8},
        {id: 5.8, title: "Outros cursos", description: "Graduação 7 Pontos",value: 7},
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
            {isLoading && <ModalIsLoading isLoading={isLoading} message="Enviando Dados"/>}
            <h2 className="font-bold text-2xl">Quesito 5 - Desenvolvimento Profissional </h2>
            <p className="text-start">Avalie o colaborador de acordo com os critérios abaixo:</p>
            <p className="text-sm text-gray-500">Selecione os cursos realizados pelo colaborador e clique em avançar.</p>
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
            <ButtonSubmit type="submit" text="Avançar" onClick={handleSubmit} disabled={isLoading}/>
        </div>
    )
}

