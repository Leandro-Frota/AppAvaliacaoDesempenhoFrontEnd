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
        const [descriptionItem, setDescriptionItem] = useState("")  
        const [enableJustify, setEnableJustify] = useState(true)
        const [nameCourse, setNameCourse] = useState("")
     
        const requiredTest = selectedCheckbox>0 ? true : false
       

      useEffect(()=>{
        if(selectedRadio && handleRadioChange){
            setDescriptionItem(description)
            handleRadioChange(item,selectedRadio,justification,descriptionItem)
        }

        if(selectedCheckbox && handleCheckBoxChange){
            setDescriptionItem(description)
            handleCheckBoxChange(item,selectedCheckbox,nameCourse, descriptionItem)
        }

        if(selectedNumber && handleNumberChange){
            setDescriptionItem(description)
            handleNumberChange(item,selectedNumber, descriptionItem)
        }
    
    },[selectedRadio,selectedCheckbox,selectedNumber,justification,descriptionItem,nameCourse,description,handleRadioChange,handleCheckBoxChange,handleNumberChange,item])

    
    useEffect(()=>{
        if(selectedRadio==="7"){
            setEnableJustify(false)
        }else{
            setEnableJustify(true)
            setJustification("")
        }
    },[selectedRadio])

    return (
        <div className='flex p-5 rounded flex-col  w-full justify-between gap-1  bg-white' >                
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
                                        required = {true}          
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
                                    isTextarea = {true}
                                    className="outline-0 rounded-md p-2"
                                    colOrRow = "col"
                                    rowInput = "4"
                                    colInput="40"
                                    disabledJustify={enableJustify}
                                    required = {!enableJustify}
                                    captureOnChangeText={setJustification}/>
                    </div>
                </>  }
                {course &&
                    <>
                  <div className='flex w-full gap-2 justify-content-center'>            
                        <InputLabel label=""
                                    placeholder="Nome do curso"
                                    type="text"
                                    className="border outline-1 p-1 rounded-md"
                                    size={70}
                                    colOrRow = "col"
                                    captureOnChangeText= {setNameCourse}
                                    required = {requiredTest}/>
                        <InputLabel label=""
                                    type="checkbox"
                                    className="flex-1 rounded w-5 "
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
                                        className="flex-1 w-full border outline-1 p-1 rounded-md"
                                        colOrRow = "col"
                                        captureCheckNumber={setSelectedNumber}
                                        required/>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}