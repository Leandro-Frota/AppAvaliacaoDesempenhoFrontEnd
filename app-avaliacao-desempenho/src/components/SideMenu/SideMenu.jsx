"use client"
import SideMenuItem from "../SideMenuItem/SideMenuItem"

export default function SideMenu(){
    return <div className="flex flex-col p-6 border-r border-r-gray-400 gap-3 min-w-60">
    <SideMenuItem title="Introdução"  path="/" />
    <SideMenuItem title="Cadastro Funcionário"  path="/register" />
    <SideMenuItem title="Quesito 1"  path="/" />
    <SideMenuItem title="Quesito 2"  path="/" />
    <SideMenuItem title="Quesito 3" path="/" />
    <SideMenuItem title="Quesito 4" path="/" />
    <SideMenuItem title="Resumo" path="/" />
    </div>
}