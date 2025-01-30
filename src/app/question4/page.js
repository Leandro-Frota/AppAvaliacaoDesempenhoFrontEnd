'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react";

export  default function Question4(){

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
            <h2 className="font-bold text-2xl">Quesito 4 - Comportamento </h2>
      
            <Item
                item="4.1"
                nameRadio="4.1"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                captureValueRadio={captureValueRadio} />
            <Item
                item="4.2"
                nameRadio="4.2"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                captureValueRadio={captureValueRadio} />
            <Item
                item="4.3"
                nameRadio="4.3"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                captureValueRadio={captureValueRadio}  />
            <Item
                item="4.4"
                nameRadio="4.4"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                captureValueRadio={captureValueRadio}  />
            
                                    
        </div>
    )
}