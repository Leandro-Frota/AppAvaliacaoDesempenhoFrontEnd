"use client"
import SideMenuItem from "../SideMenuItem/SideMenuItem"

export default function SideMenu(){
    return <div className="flex flex-col p-6 border-r border-r-gray-400 gap-3 min-w-60">
    <SideMenuItem title="Introdução"  path="/" />
    <SideMenuItem title="Cadastro Funcionário"  path="/register"  />
    <SideMenuItem title="1. Preparo e Qualificação"  path="/question1" />
    <SideMenuItem title="2. Trabalho em equipe"  path="/question2" />
    <SideMenuItem title="3. Compromisso com os resultados" path="/question3" />
    <SideMenuItem title="4. Comportamento" path="/question4" />
    <SideMenuItem title="5. Desenvolvimento profissional" path="/question5" />
    <SideMenuItem title="6. Reconhecimento interno" path="/question6" />
    <SideMenuItem title="Resumo" path="/resume-pontuation" />
    </div>
}