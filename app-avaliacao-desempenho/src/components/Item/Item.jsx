import InputLabel from "../InputLabel/InputLabel";

export default function Item({item = "padrão", title= "padrão" , description = "padráo"   }){
    return (
        <div className='flex flex-col  w-full justify-between gap-1 '>                
            <div className='flex'>
                <p className="flex gap-2"><span>{item}</span>{title}</p>
            </div>
            <div className='flex flex-2 '>
                <p> {description}</p>
            </div>
            <div className='flex flex-1 gap-2 '>
           
                <InputLabel label="A" type="checkbox" className="" colOrRow = "row"  />
                <InputLabel label="B" type="checkbox" className="" colOrRow = "row"   />
                <InputLabel label="C" type="checkbox" className="" colOrRow = "row"  />
               
            </div>
            <div className="w-full">
                <InputLabel label="Jutificativa" textareaid = {true}  className="outline-0 rounded-md" colOrRow = "col" rowInput = "4" colInput="40"/>
            </div>
        </div>
    )
}