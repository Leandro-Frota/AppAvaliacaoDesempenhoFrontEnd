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
          <div>
            <ul className="flex flex-row gap-4">
              <Link href="/about"><li className=" cursor-pointer text-sm text-gray-600">Sobre</li></Link>
              <li className="text-sm text-gray-600">Contato</li>
              <li className="text-sm text-gray-600">Ajuda</li>
              <Link href="/"><SignOut className="text-sm text-gray-600 cursor-pointer" size={20} /></Link>
            </ul>
          </div>
        </div>
          
    )
}