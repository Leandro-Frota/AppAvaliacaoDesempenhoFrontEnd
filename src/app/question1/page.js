'use client'
import Item from "@/components/Item/Item"
import { useCallback, useState } from "react"

export  default function Question1(){


    const [values, setValues] = useState({});

    console.log(values);

    const captureValueRadio = useCallback((item, value, justify) => {
        
        setValues(prevValues => ({
            ...prevValues,
            [item]: { value, justify }
        }));
    }, []);



   
    
    return (
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <h2 className="font-bold text-2xl">Quesito 1 - Prepara e Qualificação </h2>
            <Item
                item="1.1"
                nameRadio="1.1"
                title="Conhecimento técnico"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                valueItem = {0}
                captureValueRadio = {captureValueRadio}
            />
            <Item
                item="1.2"
                nameRadio="1.2"
                title="Capacidade analítica"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                valueItem = {0}
                captureValueRadio = {captureValueRadio}
            />
            <Item
                item="1.3"
                nameRadio="1.3"
                title="Inovação"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                valueItem = {0}
                captureValueRadio = {captureValueRadio}
            />
            <Item
                item="1.4"
                nameRadio="1.4"
                title="Geração de conhecimento"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                valueItem = {0}
                captureValueRadio = {captureValueRadio}
            />
              <Item
                item="1.5"
                nameRadio="1.5"
                title="Organização"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                valueItem = {0}
                captureValueRadio = {captureValueRadio}
            />
              <Item
                item="1.6"
                nameRadio="1.6"
                title="Comunicação"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                valueItem = {0}
                captureValueRadio = {captureValueRadio}
            />
             <Item
                item="1.7"
                nameRadio="1.7"
                title="Autodesenvolvimento"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
                valueItem = {0}
                captureValueRadio = {captureValueRadio}
            />
            <p>Pontuação: </p>
                                    
        </div>
    )
}