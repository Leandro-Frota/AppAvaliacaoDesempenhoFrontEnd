'use client'
import Item from "@/components/Item/Item"
import { useState, useCallback } from "react";

export  default function Question5(){
    const [values, setValues] = useState({});   

    const captureValueCheckbox = useCallback((item, value, nameCourse) => {
        setValues(prevValues => {
            const newValues = {
                ...prevValues,
                [item]: { value, nameCourse }  
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
            <Item
                item="5.1"
                nameRadio="5.1"
                title=""
                description="Exemplo: Cursos Promovidos pela empresa 80 Horas 4 Pontos"
                person={false}
                recognition = {false}
                course
                value={4} 
                captureValueCheckbox={captureValueCheckbox}/>
            <Item
                item="5.2"
                nameRadio="5.2"
                title=""
                description="Exemplo: Cursos Promovidos pela empresa 40 Horas 3 Pontos"
                person={false}
                recognition = {false}
                course value={3}
                captureValueCheckbox={captureValueCheckbox}/>
            <Item
                item="5.3"
                nameRadio="5.3"
                title=""
                description="Exemplo: Cursos técnicos 80 Horas 5 Pontos"
                person={false}
                recognition = {false}
                course
                value={5}
                captureValueCheckbox={captureValueCheckbox}/>
            <Item
                item="5.4"
                nameRadio="5.4"
                title=""
                description="Exemplo: Cursos Gestão pública 20 Horas 1 Ponto"
                person={false}
                recognition = {false}
                course
                value={1}
                captureValueCheckbox={captureValueCheckbox}/>
            <Item
                item="5.5"
                nameRadio="5.5"
                title=""
                description="Exemplo: Doutorado 10 Pontos"
                person={false}
                recognition = {false}
                course
                value={10}
                captureValueCheckbox={captureValueCheckbox}/>
            <Item
                item="5.6"
                nameRadio="5.6"
                title=""
                description="Exemplo: Mestrado 9 Pontos"
                person={false}
                recognition = {false}
                course
                value={9}
                captureValueCheckbox={captureValueCheckbox}/>
            <Item
                item="5.7"
                nameRadio="5.7"
                title=""
                description="Exemplo: Pós-graduação 8 Pontos"
                person={false}
                recognition = {false}
                course
                value={8}
                captureValueCheckbox={captureValueCheckbox}/>
            <Item 
                item="5.8"
                nameRadio="5.8"
                title=""
                description="Exemplo: Graduação 7 Pontos"
                person={false}
                recognition = {false}
                course
                value={7}
                captureValueCheckbox={captureValueCheckbox}/>
        </div>
    )
}

