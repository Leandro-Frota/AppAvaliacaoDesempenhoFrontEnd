import Item from "@/components/Item/Item"

export  default function Question5(){
    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Question 6 </h2>
      
            <Item
                    item="6.1" 
                    nameRadio="6.1" 
                    title="Reconhecimento"                    
                    description="Elogio : Realiza o trabalho...."
                    person={false} course = {false} recognition = {true} />
            <Item item="6.2" nameRadio="6.2"  title="" description="Descrição do item" person={false} course = {false} recognition = {true} />
           
            
                                    
        </div>
    )
}
