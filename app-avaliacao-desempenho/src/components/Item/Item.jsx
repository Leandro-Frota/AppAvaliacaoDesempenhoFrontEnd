import InputLabel from "../InputLabel/InputLabel";

export default function 

Item({item = "item", title= "título" , description = "descrição", person=false, course=false , recognition = false   }){
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
                 <> <div className='flex flex-1 gap-2 mt-2'>
                    <p>Marque uma opção</p>            
                        <InputLabel
                                     label="A"
                                     type="checkbox"
                                     className=""
                                     colOrRow = "row"
                        />
                        <InputLabel label="B"
                                     type="checkbox"
                                     className=""
                                     colOrRow = "row"
                        />
                        <InputLabel label="C"
                                    type="checkbox"
                                    className=""
                                    colOrRow = "row"
                      />
                    </div>
                <div className="w-full mt-4">
                    <InputLabel label="Jutificativa"
                                textareaid = {true}
                                className="outline-0 rounded-md p-2"
                                colOrRow = "col"
                                rowInput = "4"
                                colInput="40"/>
                </div>
                </>  }
                {course &&
                 <> <div className='flex w-full gap-2 '>            
                        <InputLabel label="Nome do curso"
                                    type="text"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                        />
                        <InputLabel label="Pontos"
                                    type="number"
                                    className="flex-1 w-full"
                                    colOrRow = "col"
                        />
                     
                    </div>
                
                </>  }
                {recognition &&
                 <> <div className='flex w-full gap-2 '>            
                       
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