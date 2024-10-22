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
                       
                            valueItem}){
    const [check, setCheck] = useState(0)
    const [enableJustify, setEnableJustify] = useState(true)

    // const [checkValueName, setCheckValueName] = useState({})

    valueItem = check;

    // CaptureValueItem1(check)

    function captureCheckRadio(check){
        setCheck(check)
    }

    console.log(check)
    console.log(valueItem)
    // console.log(enableJustify)
    // console.log(value)
    
// habilitar ou desabilitar a justificativa
    useEffect(()=>{

        if(check==="7"){
            setEnableJustify(false)
        }else{
            setEnableJustify(true)
        }
    
    },[check])
   

    
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
                                        captureCheck= {captureCheckRadio}
                                        
                            />
                            <InputLabel label="B"
                                        type="radio"
                                        className=""
                                        colOrRow = "row"
                                        name = {nameRadio}
                                        value = {4}
                                        captureCheck= {captureCheckRadio}
                            />
                            <InputLabel label="C"
                                        type="radio"
                                        className=""
                                        colOrRow = "row"
                                        name = {nameRadio}
                                        value = {1}
                                        captureCheck= {captureCheckRadio}

                        />
                        </div>
                    <div className="w-full mt-4">
                        <InputLabel label="Jutificativa"
                                    textareaid = {true}
                                    className="outline-0 rounded-md p-2"
                                    colOrRow = "col"
                                    rowInput = "4"
                                    colInput="40"
                                    disabledJustify={enableJustify}/>
                    </div>
                </>  }
                {course &&
                 <>
                  <div className='flex w-full gap-2  '>            
                        <InputLabel label="Nome do curso"
                                    type="text"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                        />
                        <InputLabel label={`${value} Pontos`}
                                    type="checkbox"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                                    value={value}
                                   
                        />
                        
                     
                    </div>
                
                </>  }
                {recognition &&
                 <>
                    <div className='flex w-full gap-2 '>            
                       
                        <InputLabel label="Pontos"
                                    type="number"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                        />
                     
                    </div>
                
                </>  }
              
            </div>
        </div>
    )
}