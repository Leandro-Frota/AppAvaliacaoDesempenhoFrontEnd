'use client'
import { useRouter } from "next/navigation"

export default function SideMenuItem({title,path}){
   const router = useRouter();

   function goToPath(){
      if(path){
          router.push(path);
      }
   }
   
    return (
         <div
            onClick={goToPath}
            className="cursor-pointer min-w-full p-2 bg-gray-700 max-h-10 text-white rounded text-sm text-center" >
            {title}
         </div>   
)}
