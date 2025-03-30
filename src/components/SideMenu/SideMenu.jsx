"use client"
import SideMenuItem from "../SideMenuItem/SideMenuItem"

export default function SideMenu(){
    return <div className="flex flex-col p-6 border-r border-r-gray-400 gap-3 min-w-60">
                <SideMenuItem title="Introdução"  path="/" />
                <SideMenuItem title="Cadastro Funcionário"  path="/registerEmployee"  />
                <SideMenuItem title="1. Preparo e Qualificação"  path="/questionPreparationQualification" />
                <SideMenuItem title="2. Trabalho em equipe"  path="/questionTeamWork" />
                <SideMenuItem title="3. Compromisso com os resultados" path="/questionCommimentResults" />
                <SideMenuItem title="4. Comportamento" path="/questionBehavior" />
                <SideMenuItem title="5. Desenvolvimento profissional" path="/questionProfessionalDevelopment" />
                <SideMenuItem title="6. Reconhecimento interno" path="questionInternalRecognition" />
                <SideMenuItem title="Resumo" path="/resume-pontuation" />
            </div>
}