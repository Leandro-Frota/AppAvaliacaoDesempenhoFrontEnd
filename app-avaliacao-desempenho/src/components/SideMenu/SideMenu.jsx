"use client"
import SideMenuItem from "../SideMenuItem/SideMenuItem"

export default function SideMenu(){
    return <div className="flex flex-col p-6 border-r border-r-gray-400 gap-3 min-w-60">
    <SideMenuItem title="Introdução"  path="/" />
    <SideMenuItem title="Cadastro Funcionário"  path="/register"  />
    <SideMenuItem title="Quesito 1"  path="/question1" />
    <SideMenuItem title="Quesito 2"  path="/question2" />
    <SideMenuItem title="Quesito 3" path="/question3" />
    <SideMenuItem title="Quesito 4" path="/question4" />
    <SideMenuItem title="Quesito 5" path="/question5" />
    <SideMenuItem title="Quesito 6" path="/question6" />
    <SideMenuItem title="Resumo" path="/resume-pontuation" />
    </div>
}