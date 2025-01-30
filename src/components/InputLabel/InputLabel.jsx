'use client'
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
                                    captureCheckRadio,
                                    captureOnChangeText,
                                    captureCheckbox,
                                    captureCheckNumber,
                                    captureValuesRegister,                                  
                                    disabledJustify=true,
                                    maxPound,
                                    minPound,
                                    }){
    
  

    function captureChange(e){
        if(type === "checkbox"){
             captureCheckbox(e.target.value)          
      
        }else if(type === "radio"){
            captureCheckRadio(e.target.value)

        }else if(type === "number"){
            captureCheckNumber(e.target.value)
        }
  

    }

    function captureText(value){
        if(captureValuesRegister){
            captureValuesRegister(name, value.target.value)}
        else{
            captureOnChangeText(value)
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
                            disabled= {disabledJustify}
                            onChange={captureText}/>
                         : 
               
               <>
                    <input                      
                            type={type}
                            onChange={captureOnChangeText || captureValuesRegister ? captureText : captureChange}
                            className={className}
                            name={name}
                            value={value}
                            required
                            min={minPound}
                            max={maxPound}/>                   
                </>           
            }       
            
            
        </div>
    )
}