'use client'
import { useRouter } from "next/navigation"


export default function SideMenuItem({title,path,icon:Icon}){
   const router = useRouter();

   function goToPath(){
      if(path){
          router.push(path);
      }
   }
   
    return (
         <div
            onClick={goToPath}
            className="flex cursor-pointer min-w-full p-2 hover:bg-blue-900 max-h-10 text-white rounded text-sm" >
           {<Icon className="mr-2" size={20} color="#fff" />}
            {title}
         </div>   
)}
