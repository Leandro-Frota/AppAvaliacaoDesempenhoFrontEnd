"use client"
import SideMenuItem from "../SideMenuItem/SideMenuItem"

export default function SideMenu(){
    return <div className="flex flex-col p-6 border-r border-r-gray-400 gap-3 min-w-60 bg-gray-300 p-4 text-white">
                {/* <SideMenuItem title="Introdução"  path="/" /> */}
                <SideMenuItem title="Iniciar"  path="/Pages/registerEmployee"  />
                {/* <SideMenuItem title="1. Preparo e Qualificação"  path="/Pages/questionPreparationQualification" />
                <SideMenuItem title="2. Trabalho em equipe"  path="/Pages/questionTeamWork" />
                <SideMenuItem title="3. Compromisso com os resultados" path="/Pages/questionCommimentResults" />
                <SideMenuItem title="4. Comportamento" path="/Pages/questionBehavior" />
                <SideMenuItem title="5. Desenvolvimento profissional" path="/Pages/questionProfessionalDevelopment" />
                <SideMenuItem title="6. Reconhecimento interno" path="/Pages/questionInternalRecognition" /> */}
                <SideMenuItem title="Resumo" path="/Pages/resume-pontuation" />
            </div>
}