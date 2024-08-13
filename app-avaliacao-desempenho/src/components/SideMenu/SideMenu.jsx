import SideMenuItem from "../SideMenuItem/SideMenuItem"

export default function SideMenu(){
    return <div className="flex flex-col p-6 border-r border-r-gray-400 gap-3 min-w-60">
    <SideMenuItem title="Introdução"  path="/" />
    <SideMenuItem title="Cadastro Funcionário"  path="/" />
    <SideMenuItem title="Preparo e Qualificação"  path="/" />
    <SideMenuItem title="Compromisso com resultado"  path="/" />
    <SideMenuItem title="Comportamento" path="/" />
    </div>
}