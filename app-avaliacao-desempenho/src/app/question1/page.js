import Item from "@/components/Item/Item"

export  default function Question1(){
    return (
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <Item item="1.1" title="título do item" description="Descrição do item" />
            <Item item="1.2" title="título do item" description="Descrição do item" />
            <Item item="1.3" title="título do item" description="Descrição do item" />
            <Item item="1.4" title="título do item" description="Descrição do item" />
            
                                    
        </div>
    )
}