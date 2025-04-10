"use client"
import SideMenuItem from "../SideMenuItem/SideMenuItem"
import Image from "next/image"

export default function SideMenu(){
    return <div className="flex flex-col items-center  mt-2 mx-4 rounded border-r border-r-gray-400 gap-3 w-60 bg-gray-300 p-4 text-white">
                <Image src="/assets/images/logo.png" width={100} height={100} alt="Logo" className="flex rounded justify-items-center align-middle"/>
                <SideMenuItem title="Iniciar"  path="/Pages/registerEmployee"  />
                <SideMenuItem title="Resumo" path="/Pages/resume-pontuation" />
            </div>
}