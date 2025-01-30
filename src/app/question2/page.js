"use client"
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react";

export  default function Question2(){

        const [values, setValues] = useState({});
    
        console.log(values);
    
        const captureValueRadio = useCallback((item, value, justify) => {
            
            setValues(prevValues => ({
                ...prevValues,
                [item]: { value, justify }
            }));
        }, []);
    
    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Quesito 2 - Trabalho em equipe </h2>
      
            <Item
                item="2.1"
                nameRadio="2.1"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                captureValueRadio={captureValueRadio} />
            <Item
                item="2.2"
                nameRadio="2.2"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                captureValueRadio={captureValueRadio} />
            
                                    
        </div>
    )
}