    'use client'

    export default function ResumeQuestion({employee}){

        const person = Array.isArray(employee) ? employee[0] : employee;
   

        if(!person){
            return <p className="text-red-600">Dados do funcionário não encontrado.</p>
        }

        const sections = person.steps || {};
        console.log('sections', sections);
        console.log('employee', employee);

        const sectionTranslations = {
            "Behavior": "Comportamento",
            "Commiment Results": "Resultados do Comprometimento",
            "Internal Recognition": "Reconhecimento Interno",
            "Preparation and Qualificacion": "Preparação e Qualificação",
            "Professional Development": "Desenvolvimento Profissional",
            "Team Work": "Trabalho em Equipe"
        };

        const sectonsWithoutJustification = ["Professional Development", "Internal Recognition"]
        return (
            <div className=" w-full flex flex-col border-2 bg-slate-50 border-gray-400 rounded p-4 ">
                   <h2 className="font-bold text-xl">{person.name}</h2>
                        <div className="flex flex-row gap-4">
                            <p className="text-gray-600">Cargo: {person.office}</p>
                            <p className="text-gray-600">Matrícula: {person.registration}</p>
                            <p className="text-gray-600">Gerência: {person.management}</p>
                        </div>
                <div>
                    {Object.entries(sections).map(([sectionName, items]) => (
                    <div key={sectionName} className="flex flex-col gap-2 border border-gray-600 p-2">
                            <h2 className="font-bold text-2xl">{sectionTranslations[sectionName] || sectionName}</h2>
                            {Object.entries(items).map(([itemKey,item]) => (
                                <div key={itemKey} className="flex flex-col gap-1 border border-gray-600 p-2">
                                    <p><strong>Item:</strong>{itemKey}</p>
                                    <p><strong>Descrição: </strong>{item.description || "Não informada"}</p>
                                    <p><strong>Pontos: </strong>{item.score ?? "N/A"}</p>                                    
                                    {!sectonsWithoutJustification.includes(sectionName) &&
                                        <p><strong>Justificativa:</strong> {item.justification || "Não informada"}</p>}
                                                                        
                                </div>
                            ))}
                        </div>  
                    ))}
                    <button className="bg-blue-500 text-white p-2 rounded mt-4">Imprimir</button>
                </div>
            </div>
    )
    }