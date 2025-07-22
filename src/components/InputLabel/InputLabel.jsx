'use client'

export default function InputLabel({label,
                                    type,
                                    className = "",
                                    colOrRow = "col",
                                    isTextarea = false,
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
                                    placeholder,
                                    size,
                                    required = false,
                                    }){

    function captureChange(e){
        if(type === "checkbox"){
             captureCheckbox(e.target.checked ? Number(e.target.value) : 0)        
      
        }else if(type === "radio"){
            captureCheckRadio(e.target.value)

        }else if(type === "number"){
            captureCheckNumber(e.target.value)
        }
    }

    function captureText(e){
        if(captureValuesRegister){
            captureValuesRegister(name, e.target.value)}
        else{
            captureOnChangeText(e.target.value ? e.target.value : "")
        }
    }
 
    return (
                <div className= {`flex flex-${colOrRow} gap-1`}>
                    <label  >{label}</label>
                    { isTextarea ?
                            <textarea
                                        className={className}
                                        placeholder="Digite aqui sua justifcativa"
                                        cols = {colInput}
                                        rows = {rowInput}
                                        disabled= {disabledJustify}
                                        onChange={captureText}
                                        required={required}
                                   
                                       
                            />
                                :                  
                            <>
                                <input  placeholder={placeholder}                   
                                        type={type}
                                        onChange={captureOnChangeText || captureValuesRegister ? captureText : captureChange}
                                        className={className}
                                        name={name}
                                        value={value}
                                        required={required}
                                        min={minPound}
                                        max={maxPound}
                                        size={size}/>                   
                            </>           
                    }    
                </div>
            )
}