"use client"

export default function About() {
  return (
    <main className="h-full w-full flex flex-col">     

      <h1 className="font-bold text-center text-12x1">Avaliação de Desempenho de Funcionários</h1>

      <p className="text-justify mt-4 ">
        A avaliação de desempenho de funcionários é uma ferramenta essencial nas empresas para medir a eficiência,
        produtividade e alinhamento dos colaboradores com os objetivos organizacionais. Esse processo permite
        identificar pontos fortes, áreas de melhoria e definir planos de desenvolvimento personalizados.
      </p>

      <p className="text-start mt-4">
        Na metodologia descrita, para os quesitos:</p>
        <ul className="list-disc mx-6 text-start">
          <li>Preparo e Qualificação</li>
          <li>Trabalho em equipe</li>
          <li>Resultados do comprometimento</li>
          <li>Comportamento</li>
        </ul>
        
      <p className="mt-"> Cada quesito avaliado recebe uma pontuação específica:</p>
      
      <div className="flex flex-col items-center">
        <table className="w-1/2 mt-4 border-collapse border border-gray-300">
          <thead className="bg-gray-200 p-2">
            <tr className="border border-gray-300">
              <th className="border border-gray-300 p-2">Nota</th>
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
              <td className="border border-gray-300">4 pontos</td>
            </tr>            
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">C</td>
              <td className="border border-gray-300">Desempenho abaixo do esperado</td>
              <td className="border border-gray-300">1 ponto</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className=" mt-4 ">
        Para os quesito:
      </p>
      <ul className="list-disc mx-6 text-start">
        <li>Desenvolvimento profissional</li>
      </ul>
        
      <p className="mt-4">Cada item avaliado recebe uma pontuação específica de acordo com a descrição do item.</p>
      
      <div className="flex flex-col items-center">
        <table className="w-1/2 mt-4 border-collapse border border-gray-300">
          <thead className="bg-gray-200 p-2">
            <tr className="border border-gray-300">
              <th className="border border-gray-300 p-2">Descrição</th>
              <th className="border border-gray-300 p-2">Pontuação</th>
            </tr>
          </thead >
          <tbody className="bg-white p-2">
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Cursos Promovidos pela empresa 80 Horas</td>
              <td className="border border-gray-300">4 pontos</td>
            </tr>
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Cursos Promovidos pela empresa 40 Horas</td>
              <td className="border border-gray-300">3 pontos</td>
            </tr>            
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Cursos técnicos 80 Horas</td>
              <td className="border border-gray-300">5 pontos</td>
            </tr>
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Cursos Gestão pública 20 Horas</td>
              <td className="border border-gray-300">1 ponto</td>
            </tr>
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Doutorado</td>
              <td className="border border-gray-300">10 pontos</td>
            </tr>
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Mestrado</td>
              <td className="border border-gray-300">9 pontos</td>
            </tr>
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Pós-Graduação</td>
              <td className="border border-gray-300">8 pontos</td>
            </tr>
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Graduação</td>
              <td className="border border-gray-300">7 pontos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className=" mt-4 ">
        Para os quesito:
      </p>
      <ul className="list-disc mx-6 text-start">
        <li>Reconhecimento interno</li>
      </ul>        
      <p className="mt-4">Cada item avaliado recebe uma pontuação específica de acordo com a descrição do item.</p>      
      <div className="flex flex-col items-center">
        <table className="w-1/2 mt-4 border-collapse border border-gray-300">
          <thead className="bg-gray-200 p-2">
            <tr className="border border-gray-300">
              <th className="border border-gray-300 p-2">Descrição</th>
              <th className="border border-gray-300 p-2">Pontuação</th>
            </tr>
          </thead >
          <tbody className="bg-white p-2">
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Elogios(Por cada um)</td>
              <td className="border border-gray-300">1 ponto</td>
            </tr>
            <tr className="border border-gray-300 text-center">
              <td className="border border-gray-300">Honra ao mérito(Por cada)</td>
              <td className="border border-gray-300">1 ponto</td>
            </tr>    
          </tbody>
        </table>
      </div>
      <p className="text-start mt-4">
        Essas pontuações permitem quantificar o desempenho de cada funcionário de forma clara e objetiva.
      </p>    

    </main>
  );
}
