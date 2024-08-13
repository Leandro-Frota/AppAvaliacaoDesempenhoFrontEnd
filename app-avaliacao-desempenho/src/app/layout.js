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
      <body className={`${inter.className} flex flex-col `}>
        <Header/>
        <div className="flex flex-row">
          <SideMenu/>
          <div className="flex flex-grow">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
