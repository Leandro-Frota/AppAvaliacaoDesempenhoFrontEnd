    'use client'
    import { useRef } from "react";
    import html2pdf from "html2pdf.js";

    export default function ResumeQuestion({employee}){
        const printRef = useRef(null);

        const person = Array.isArray(employee) ? employee[0] : employee;
        console.log('person', person);
        if(!person){
            return console.log('Nenhum funcionário encontrado');
        }

        const sections = person.steps || {};
        console.log('sections', sections);


        const sectionTranslations = {
            "Behavior": "Comportamento",
            "Commiment Results": "Resultados do Comprometimento",
            "Internal Recognition": "Reconhecimento Interno",
            "Preparation and Qualificacion": "Preparação e Qualificação",
            "Professional Development": "Desenvolvimento Profissional",
            "Team Work": "Trabalho em Equipe"
        };

        const sectonsWithoutJustification = ["Professional Development", "Internal Recognition"]

        const handlePrint = async () => {
            // const html2pdf = (await import("html2pdf.js")).default;
            const printContent = printRef.current;

            const options = {
                margin: 0.5,
                filename: "resume.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: "in", orientation: "portrait", format: "a4", margin: 0 }
            };

            html2pdf().set(options).from(printContent).outputPdf('dataurlnewwindow').save("resume.pdf");

        }
        return (
            <>
            <div  ref={printRef} className=" w-full flex flex-col border-2 bg-slate-50 border-gray-400 rounded p-4 ">
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
                            <p className="text-lg font-semibold">
                                Total de Pontos: {
                                Object.values(items).reduce((acc, item) => acc + (Number(item.score) || 0), 0)
                                }
                            </p>
                            {Object.entries(items).map(([itemKey,item]) => (
                                <div key={itemKey} className="flex flex-col gap-1 border border-gray-600 p-2">
                                    <p><strong>Item:</strong>{itemKey}</p>
                                    <p><strong>Descrição: </strong>{item.description || "Não informada"}</p>
                                    <p><strong>Pontos: </strong>{item.score ?? "N/A"}</p>                                    
                                    {(item.score ==7 && !sectonsWithoutJustification.includes(sectionName)) &&
                                        <p><strong>Justificativa:</strong> {item.justification || "Não informada"}</p>}
                                                                        
                                </div>
                            ))}
                        </div>  
                    ))}
                   
                </div>
            </div>
            <button onClick={handlePrint} className="bg-blue-500 text-white p-2 rounded mt-4">Baixar PDF</button>
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl">Resumo</h2>
                <p className="text-lg font-semibold">Total de Pontos: {person.totalScore}</p>
                <p className="text-lg font-semibold">Data de Avaliação: {person.evaluationDate}</p>
                <p className="text-lg font-semibold">Avaliado por: {person.evaluator}</p>
                <p className="text-lg font-semibold">Data de Entrega: {person.deliveryDate}</p>

            </div>

            </>
            
    )
    }