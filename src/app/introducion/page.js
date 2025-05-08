"use client"

export default function Introducion() {
  return (
    <main className="flex h-screen flex-col items-center">
      

      <h1 className="font-bold text-9x1">Avaliação de Desempenho de Funcionários</h1>

      <p className="text-center mt-4 ">
        A avaliação de desempenho de funcionários é uma ferramenta essencial nas empresas para medir a eficiência,
        produtividade e alinhamento dos colaboradores com os objetivos organizacionais. Esse processo permite
        identificar pontos fortes, áreas de melhoria e definir planos de desenvolvimento personalizados.
      </p>

      <p className="text-center mt-4    ">
        Na metodologia descrita, cada quesito avaliado recebe uma pontuação específica:
      </p>

      <table className="w-1/2 mt-4 border-collapse border border-gray-300">
        <thead className="bg-gray-200 p-2">
          <tr className="border border-gray-300">
            <th className="border border-gray-300 p-2">Quesito</th>
            <th className="border border-gray-300 p-2">Descrição</th>
            <th className="border border-gray-300 p-2">Pontuação</th>
          </tr>
        </thead >
        <tbody className="bg-white p-2">
          <tr className="border border-gray-300 text-center">
            <td className="border border-gray-300">A</td>
            <td className="border border-gray-300">Desempenho excelente</td>
            <td className="border border-gray-300">7 pontos</td>
          </tr>
          <tr className="border border-gray-300 text-center">
            <td className="border border-gray-300">B</td>
            <td className="border border-gray-300">Desempenho acima do esperado</td>
            <td className="border border-gray-300">6 pontos</td>
          </tr>            
          <tr className="border border-gray-300 text-center">
            <td className="border border-gray-300">C</td>
            <td className="border border-gray-300">Desempenho abaixo do esperado</td>
            <td className="border border-gray-300">1 ponto</td>
          </tr>
        </tbody>
      </table>

      <p className="text-center mt-4">
        Essas pontuações permitem quantificar o desempenho de cada funcionário de forma clara e objetiva.
      </p>    

    </main>
  );
}
