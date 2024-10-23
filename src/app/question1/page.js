'use client'
import Item from "@/components/Item/Item"
import { useState } from "react"

export  default function Question1(){

    // const [valueItem1,setValueItem1] = useState(0)

    // function CaptureValueItem1(value){
    //        setValueItem1(value)
    // }

    const value1 = 0
    console.log(value1)
    
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
                // CaptureValueItem1 = {CaptureValueItem1}
                valueItem = {value1}
            />
            <Item
                item="1.2"
                nameRadio="1.2"
                title="Capacidade analítica"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
            />
            <Item
                item="1.3"
                nameRadio="1.3"
                title="Inovação"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
            />
            <Item
                item="1.4"
                nameRadio="1.4"
                title="Geração de conhecimento"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
            />
              <Item
                item="1.4"
                nameRadio="1.4"
                title="Organização"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
            />
              <Item
                item="1.4"
                nameRadio="1.4"
                title="Comunicação"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
            />
             <Item
                item="1.4"
                nameRadio="1.4"
                title="Autodesenvolvimento"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}
            />
            <p>Pontuação: </p>
                                    
        </div>
    )
}