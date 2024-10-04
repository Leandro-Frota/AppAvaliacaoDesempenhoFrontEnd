import Item from "@/components/Item/Item"

export  default function Question4(){
    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Quesito 4 </h2>
      
            <Item
                item="4.1"
                nameRadio="4.1"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false} />
            <Item
                item="4.2"
                nameRadio="4.2"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false}/>
            <Item
                item="4.3"
                nameRadio="4.3"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false} />
            <Item
                item="4.4"
                nameRadio="4.4"
                title="título do item"
                description="Descrição do item"
                person
                course = {false}
                recognition = {false} />
            
                                    
        </div>
    )
}