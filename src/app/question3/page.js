'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react";

export  default function Question3(){
    const [values, setValues] = useState({});

    const captureValueRadio = useCallback((item, value, justify) => {        
        setValues(prevValues => ({
            ...prevValues,
            [item]: { value, justify }
        }));
    }, []);

    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Quesito 3 - Compromisso com resultados </h2>      
            <Item
                item="3.1"
                nameRadio="3.1"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                captureValueRadio={captureValueRadio} />
            <Item
                item="3.2"
                nameRadio="3.2"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                captureValueRadio={captureValueRadio} />                                   
        </div>
    )
}