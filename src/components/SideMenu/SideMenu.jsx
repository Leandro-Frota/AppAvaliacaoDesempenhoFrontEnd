"use client"
import SideMenuItem from "../SideMenuItem/SideMenuItem"
import Image from "next/image"
import { Article, List, Play } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"

export default function SideMenu(){
    const router = useRouter();
    // const handleLogoClick = () => {
    //     router.push('/about');
    // }
    return (
             <div role="navigation" className="min-h-screen flex flex-col items-center mt-2 mx-4 rounded border-r gap-3 w-60 bg-gray-900 p-4 text-white">
                {/* <Image src="/assets/images/logo.png" onClick={handleLogoClick} width={100} height={100} alt="Logo" className="cursor-pointer rounded mx-auto object-contain" priority /> */}
                <SideMenuItem icon={List} title="Dashboard" path="/dashboard" />
                <SideMenuItem icon={Play} title="Iniciar"  path="/registerEmployee"  />
                <SideMenuItem icon={Article} title="Resumo" path="/resumePontuation" />
            </div>
    )
}