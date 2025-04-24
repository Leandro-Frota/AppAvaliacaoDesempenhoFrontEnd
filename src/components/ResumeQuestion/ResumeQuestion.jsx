'use client'

export default function ResumeQuestion({employeeDatas = []}){
    //modelo de dados para o funcionário
    // const employeeID = {
    //     _id: '67ffba3bc06ce20753a7d12c',
    //     name:"Vojvoda",
    //     management:"GESOP",
    //     office:"ASO",
    //     registration:"456",        
    //     steps:{PreparationandQualificacion:{
    //         1.1: {
    //             description: "O empregado demonstra conhecimento técnico e habilidades necessárias para desempenhar suas funções de forma eficaz.",
    //             score:"10",
    //             justification:"ok"
    //         },
    //         1.2: {
    //             score:"10",
    //             justification:"ok"
    //         }
    //     },
    // }
    // }
    return (
        <div className=" w-full flex flex-col border-2 bg-slate-50 border-gray-400 rounded p-4 ">
            <h2 className="text-center">{employeeDatas.steps}</h2>
            <div>
                <div>
                    <p>Item:{employeeDatas}</p>
                    {/* <p>Gestão:{employeeID.management}</p>
                    <p>Função:{employeeID.office}</p>
                    <p>Matrícula:{employeeID.registration}</p>
                    <p>Item:{employeeID.steps.PreparationandQualificacion["1.1"].description}</p>
                    <p>Nota:{employeeID.steps.PreparationandQualificacion["1.1"].score}</p>
                    <p>Justificativa:{employeeID.steps.PreparationandQualificacion["1.1"].justification}</p>
                    <div>Contestação</div>
                    <p>Item:{employeeID.steps.PreparationandQualificacion["1.2"].description}</p>
                    <p>Nota:{employeeID.steps.PreparationandQualificacion["1.2"].score}</p>
                    <p>Justificativa:{employeeID.steps.PreparationandQualificacion["1.2"].justification}</p>
                    <div>Contestação</div> */}
                </div>
            </div>
        </div>
)
}