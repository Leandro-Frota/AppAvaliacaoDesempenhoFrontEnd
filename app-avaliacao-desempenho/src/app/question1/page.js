'use client'
import Item from "@/components/Item/Item"

export  default function Question1(){
    return (
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <h2 className="font-bold text-2xl">Question 1 </h2>
            <Item item="1.1" nameRadio="1.1" title="título do item" description="Descrição do item" person course = {false} recognition = {false}/>
            <Item item="1.2" nameRadio="1.2"  title="título do item" description="Descrição do item" person course = {false} recognition = {false}/>
            <Item item="1.3" nameRadio="1.3"  title="título do item" description="Descrição do item" person course = {false} recognition = {false}/>
            <Item item="1.4" nameRadio="1.4"  title="título do item" description="Descrição do item" person course = {false} recognition = {false}/>
            
                                    
        </div>
    )
}