    'use client'

    export default function ResumeQuestion({employee}){

        const sections = employee.steps || {};

        const sectionTranslations = {
            "Behavior": "Comportamento",
            "Commiment Results": "Resultados do Comprometimento",
            "Desenvolvimento Profissional": "Desenvolvimento Profissional",
            "Internal Recognition": "Reconhecimento Interno",
            "Preparation and Qualificacion": "Preparação e Qualificação",
            "Professional Development": "Desenvolvimento Profissional",
            "Team Work": "Trabalho em Equipe"
        };

        return (
            <div className=" w-full flex flex-col border-2 bg-slate-50 border-gray-400 rounded p-4 ">
                <div>
                    {Object.entries(sections).map(([sectionName, items]) => (
                    <div key={sectionName} className="flex flex-col gap-2 border border-gray-600 p-2">
                            <h2 className="font-bold text-2xl">{sectionTranslations[sectionName] || sectionName}</h2>
                            {Object.entries(items).map(([itemKey,item]) => (
                                <div key={itemKey} className="flex flex-col gap-1 border border-gray-600 p-2">
                                    <p><strong>Item:</strong>{itemKey}</p>
                                    <p><strong>Descrição: </strong>{item.description}</p>
                                    <p><strong>Pontos: </strong>{item.score}</p>
                                    <p><strong>Justificativa:</strong>{item.justification}</p>
                                </div>
                            ))}
                        </div>  
                    ))}
                    
                </div>
            </div>
    )
    }