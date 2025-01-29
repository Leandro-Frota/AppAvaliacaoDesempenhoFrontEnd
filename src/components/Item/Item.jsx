'use client'
import { useEffect, useState } from "react";
import InputLabel from "../InputLabel/InputLabel";

export default function Item({item = "item",
                            title= "título" ,
                            description = "descrição",
                            person=false,
                            course=false,
                            recognition = false,
                            nameRadio = "",
                            value=0,                        
                            valueItem,
                            captureValueRadio,
                            captureValueCheckbox,
                             captureValuesNumber}){
    const [checkRadio, setCheckRadio] = useState(0)
    const [checkBox,setCheckBox] = useState(0)
    const [checkNumber, setCheckNumber] = useState(0)
    const[inputText, setInputText] = useState("")
    const [enableJustify, setEnableJustify] = useState(true)



    valueItem = checkRadio; 

    useEffect(()=>{
        if(checkRadio){
            captureValueRadio(item,checkRadio,inputText)
        }

        if(checkBox){
            captureValueCheckbox(item,checkBox,inputText)
        }

        if(checkNumber){
            captureValuesNumber(item,checkNumber)
        }
    
    },[item,checkRadio,inputText,captureValueRadio,checkBox,captureValueCheckbox, checkNumber, captureValuesNumber])



    function captureCheckRadio(check){
        setCheckRadio(check)
    }
    function captureCheckbox(check){
        setCheckBox(check)
    }
    function captureOnChangeText(check){
        setInputText(check)
    }
    function captureCheckNumber(check){
        setCheckNumber(check)
    }

    
// habilitar ou desabilitar a justificativa
    useEffect(()=>{

        if(checkRadio==="7"){
            setEnableJustify(false)
        }else{
            setEnableJustify(true)
        }
    
    },[checkRadio])
   

    
    return (
        <div className='flex flex-col  w-full justify-between gap-1 '>                
            <div className='flex'>
                <p className="flex gap-2"><span>{item}</span>{title}</p>
            </div>
            <div className='flex flex-2 '>
                <p> {description}</p>
            </div>
            <div>
                {person &&
                 <>
                    <div className='flex flex-1 gap-2 mt-2'>
                        <p>Marque uma opção</p>            
                            <InputLabel
                                        label="A"
                                        type="radio"
                                        className=""
                                        colOrRow = "row"
                                        name = {nameRadio}
                                        value = {7}
                                        captureCheckRadio= {captureCheckRadio}
                                      
                                    
                                        
                            />
                            <InputLabel label="B"
                                        type="radio"
                                        className=""
                                        colOrRow = "row"
                                        name = {nameRadio}
                                        value = {4}
                                        captureCheckRadio= {captureCheckRadio}
                            
                                    
                            />
                            <InputLabel label="C"
                                        type="radio"
                                        className=""
                                        colOrRow = "row"
                                        name = {nameRadio}
                                        value = {1}
                                        captureCheckRadio= {captureCheckRadio}
                                       
                             

                        />
                        </div>
                    <div className="w-full mt-4">
                        <InputLabel label="Jutificativa"
                                    textareaid = {true}
                                    className="outline-0 rounded-md p-2"
                                    colOrRow = "col"
                                    rowInput = "4"
                                    colInput="40"
                                    disabledJustify={enableJustify}
                                    captureOnChangeText={captureOnChangeText}/>
                    </div>
                </>  }
                {course &&
                 <>
                  <div className='flex w-full gap-2  '>            
                        <InputLabel label="Nome do curso"
                                    type="text"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                                    captureOnChangeText= {captureOnChangeText}/>
                        <InputLabel label={`${value} Pontos`}
                                    type="checkbox"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                                    value={value}
                                    captureCheckbox= {captureCheckbox}/>                      
                     
                    </div>
                
                </>
                }
                {recognition &&
                 <>
                    <div className='flex w-full gap-2 '>            
                       
                        <InputLabel label="Pontos"
                                    type="number"
                                    minPound="0"
                                    maxPound="10"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                                    captureCheckNumber={captureCheckNumber}/>
                        
                     
                    </div>
                
                </>  }
              
            </div>
        </div>
    )
}