'use client'
import { SignOut } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link";

export default function Header(){
    return (
        <div className="flex flex-row mt-2 max-w-screen rounded mx-2 justify-between items-center bg-white p-4 ">
          <div>
            <ul>
              <li className="text-2xl font-bold text-gray-800">Avaliação de Funcionários</li>
              <li className="text-sm text-gray-600">Sistema de Avaliação de Funcionários</li>
            </ul>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <ul className="flex flex-row gap-4">
              <li className=" cursor-pointer text-sm text-gray-600" aria-label="link para a pagia sobre"><Link href="/about">Sobre</Link></li>
              <li className=" cursor-pointer text-sm text-gray-600" aria-label="link para a pagia contato"><Link href="/contact">Contato</Link></li>
              <li className=" cursor-pointer text-sm text-gray-600" aria-label="link para a pagia perfil"><Link href="/profile">Perfil</Link></li>
              <li className=" cursor-pointer text-sm text-gray-600" aria-label="link para a pagia ajuda"><Link href="/help">Ajuda</Link></li>             
            </ul>
            <Link href="/"><SignOut className="text-sm text-gray-600 cursor-pointer" size={20} /></Link>

          </div>
        </div>
          
    )
}