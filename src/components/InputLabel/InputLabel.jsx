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
                                    captureOnChangeText,
                                    captureCheckbox,
                                    disabledJustify=true,
                                    }){
    
    const [valueRadio,setValueRadio] = useState("")   

    function captureChange(e){
        if(type === "text"){
             captureOnChangeText(e.target.value)
        }else if(type === "checkbox"){
             captureCheckbox(e.target.value)
        }else{
            captureCheck(e.target.value)
        }
    }
 
    return (
        <div className= {`flex flex-${colOrRow} gap-1`}>
            <label  >{label}</label>

            { textareaid ?
                <textarea
                            className={className}
                            placeholder="Digite aqui sua justifcativa"
                            cols = {colInput}
                            rows = {rowInput}
                            disabled= {disabledJustify}/>
                         : 
               
               <>
                    <input                      
                            type={type}
                            onChange={captureChange}
                            className={className}
                            name={name}
                            value={value}
                            required/>                   
                </>           
            }       
            
            
        </div>
    )
}