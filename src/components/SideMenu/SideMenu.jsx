"use client"
import SideMenuItem from "../SideMenuItem/SideMenuItem"

export default function SideMenu(){
    return <div className="flex flex-col p-6 mt-2 mx-4 rounded border-r border-r-gray-400 gap-3 w-60 bg-gray-300 p-4 text-white">
                <div className="flex p-10 text-center rounded bg-gray-700">Logo</div>
                <SideMenuItem title="Iniciar"  path="/Pages/registerEmployee"  />
                <SideMenuItem title="Resumo" path="/Pages/resume-pontuation" />
            </div>
}