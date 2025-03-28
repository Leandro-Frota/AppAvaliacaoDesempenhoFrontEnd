'use client'
import Item from "@/components/Item/Item"
import { useState, useCallback } from "react";

export  default function Question6(){
    const [values, setValues] = useState({});

    const captureValuesNumber = useCallback((item, value) => {
        setValues(prevValues => ({
            ...prevValues,
            [item]: { value }
        }));
    }, []);

    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Quesito 6 - Reconhecimento interno </h2>      
            <Item
                item="6.1" 
                nameRadio="6.1" 
                title="Reconhecimento"                    
                description="Elogio : Realiza o trabalho...."
                person={false}
                course = {false}
                recognition = {true}
                captureValuesNumber={captureValuesNumber}/>
            <Item 
                item="6.2"
                nameRadio="6.2"
                title=""
                description="Descrição do item"
                person={false}
                course = {false}
                recognition = {true}
                captureValuesNumber={captureValuesNumber} />         
        </div>
    )
}
