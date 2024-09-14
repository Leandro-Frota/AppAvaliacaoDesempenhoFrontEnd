import Item from "@/components/Item/Item"

export  default function Question2(){
    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Question 2 </h2>
      
            <Item item="2.1" nameRadio="2.1"   title="título do item" description="Descrição do item" person course = {false} recognition = {false} />
            <Item item="2.2" nameRadio="2.2"  title="título do item" description="Descrição do item" person course = {false} recognition = {false} />
            
                                    
        </div>
    )
}