import { Inter,Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] , weight: ["400", "700"]});

export const metadata = {
  title: "Avaliação de Desempenho",
  description: "Sistema de Avaliação de Desempenho para Empresas",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}

