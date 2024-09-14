import { useState } from "react"

export default function InputLabel({label,
                                    type,
                                    className = "",
                                    colOrRow = "col",
                                    textareaid = false,
                                    colInput,
                                    rowInput,
                                    name,
                                    value,
                                    captureCheck,
                                    disabledJustify=true}){
    
    const [valueRadio,setValueRadio] = useState("")

    

    function captureChangeRadio(e){
        captureCheck(e.target.value)
        
               
        
    }


    console.log(valueRadio)
  

    return (
        <div className= {`flex flex-${colOrRow} gap-1`}>
            <label  >{label}</label>

            { textareaid ? <textarea className={className} placeholder="Digite aqui sua justifcativa" cols = {colInput} rows = {rowInput} disabled= {disabledJustify} /> : 
                <input type={type} onChange={captureChangeRadio} className={className} name={name} value={value}  required/>
                           
            }
        
            
            
            
        </div>
    )
}