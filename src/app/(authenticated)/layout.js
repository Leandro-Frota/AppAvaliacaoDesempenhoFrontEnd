'use client';

import SideMenu from "@/components/SideMenu/SideMenu";
import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";


export default function ClietnLayout({ children }) {

  const routePath = usePathname();

//   if(routePath === "/" || routePath === "/login"){
//     return (
//       <html lang="pt-br">
//         <body className={`${inter.className} flex justify-center items-center h-screen`}>
//           {children}
//         </body>
//       </html>
//     )
//   }

  if (routePath === "/" || routePath === "/login") {
    return (
      <div className="flex justify-center items-center h-screen">
        {children}
      </div>
    );
  }

//   return (
//     <html lang="pt-br">
//       <body className={`${inter.className}  min-h-full max-w-screen`}>
//         <div className="flex flex-row max-w-screen">
//           <SideMenu/>
//             <div className="flex flex-col min-h-screen w-full bg-gray-200">
//             <Header/>         
//               <div className="flex flex-col gap-1  h-full w-full bg-gray-200 p-10">
//                 {children}
//               </div>
//             </div>
//         </div>
//       </body>
//     </html>
//   );
// }

 return (
    <div className="flex flex-row max-w-screen">
      <SideMenu />
      <div className="flex flex-col min-h-screen w-full bg-gray-200">
        <Header />
        <div className="flex flex-col gap-1 h-full w-full bg-gray-200 p-10">
          {children}
        </div>
      </div>
    </div>
  );
}
