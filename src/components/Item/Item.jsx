'use client'
import { useEffect, useState } from "react";
import InputLabel from "../InputLabel/InputLabel";

export default function Item({
        item = "item",
        title= "título" ,
        description = "descrição",
        person=false,
        course=false,
        recognition = false,
        nameRadio = "",
        value=0,
        handleRadioChange,
        handleCheckBoxChange,
        handleNumberChange
}) {
        const [selectedRadio, setSelectedRadio] = useState(0)
        const [selectedCheckbox, setSelectedCheckbox] = useState(0)
        const [selectedNumber, setSelectedNumber] = useState(0)
        const[justification,setJustification] = useState("")
        const [enableJustify, setEnableJustify] = useState(true)

      useEffect(()=>{
        if(selectedRadio && handleRadioChange){
            handleRadioChange(item,selectedRadio,justification)
        }

        if(selectedCheckbox && handleCheckBoxChange){
            handleCheckBoxChange(item,selectedCheckbox,justification)
        }

        if(selectedNumber && handleNumberChange){
            handleNumberChange(item,selectedNumber)
        }
    
    },[selectedRadio,selectedCheckbox,selectedNumber,justification,handleRadioChange,handleCheckBoxChange,handleNumberChange,item])

    
// habilitar ou desabilitar a justificativa
    useEffect(()=>{

        if(selectedRadio==="7"){
            setEnableJustify(false)
        }else{
            setEnableJustify(true)
            setJustification("")
        }
    
    },[selectedRadio])

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
                                        captureCheckRadio= {setSelectedRadio}          
                            />
                            <InputLabel label="B"
                                        type="radio"
                                        className=""
                                        colOrRow = "row"
                                        name = {nameRadio}
                                        value = {4}
                                        captureCheckRadio= {setSelectedRadio}
                            />
                            <InputLabel label="C"
                                        type="radio"
                                        className=""
                                        colOrRow = "row"
                                        name = {nameRadio}
                                        value = {1}
                                        captureCheckRadio= {setSelectedRadio}
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
                                    captureOnChangeText={(e)=>setJustification(e.target.value)}/>
                    </div>
                </>  }
                {course &&
                    <>
                  <div className='flex w-full gap-2  '>            
                        <InputLabel label="Nome do curso"
                                    type="text"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                                    captureOnChangeText= {setJustification}/>
                        <InputLabel label={`${value} Pontos`}
                                    type="checkbox"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                                    value={value}
                                    captureCheckbox= {setSelectedCheckbox}/>
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
                                        captureCheckNumber={setSelectedNumber}/>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}