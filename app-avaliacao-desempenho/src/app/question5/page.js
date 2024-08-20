import Item from "@/components/Item/Item"

export  default function Question5(){
    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Question 5 </h2>
      
            <Item item="5.1" title="" description="Exemplo: Cursos Promovidos pela empresa" person={false} recognition = {false} course />
            <Item item="5.2" title="" description="Descrição do item" person={false} recognition = {false} course />
            <Item item="5.3" title="" description="Descrição do item" person={false} recognition = {false} course />
            <Item item="5.4" title="" description="Descrição do item" person={false} recognition = {false} course />
            <Item item="5.5" title="" description="Descrição do item" person={false} recognition = {false} course />
            
                                    
        </div>
    )
}

