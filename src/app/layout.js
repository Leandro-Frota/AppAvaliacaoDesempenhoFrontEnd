'use strict';
import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu/SideMenu";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App Avaliação de Desempenho",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header/>
        <div className="flex flex-row min-h-screen">
          <SideMenu/>
          <div className="flex flex-col gap-1 flex-grow min-h-screen">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
