"use client"
import SideMenuItem from "../SideMenuItem/SideMenuItem"
import Image from "next/image"
import { Article, List, Play } from "@phosphor-icons/react/dist/ssr"

export default function SideMenu(){
    return <div className="flex flex-col items-center  mt-2 mx-4 rounded border-r gap-3 w-60 bg-gray-900 p-4 text-white">
                <Image src="/assets/images/logo.png" width={100} height={100} alt="Logo" className=" rounded mx-auto object-contain" priority/>
                <SideMenuItem icon={List} title="Dashboard" path="/Pages/dashboard" />
                <SideMenuItem icon={Play} title="Iniciar"  path="/Pages/registerEmployee"  />
                <SideMenuItem icon={Article} title="Resumo" path="/Pages/resume-pontuation" />
            </div>
}