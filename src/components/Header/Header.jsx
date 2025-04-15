'use client'
import { SignOut } from "@phosphor-icons/react/dist/ssr"

export default function Header(){
    return (
        <div className="flex flex-row mt-2 max-w-screen rounded mx-2 justify-between items-center bg-white p-4 ">
          <div>Links</div>
          <div><SignOut size={20}/></div>
        </div>
    )
}