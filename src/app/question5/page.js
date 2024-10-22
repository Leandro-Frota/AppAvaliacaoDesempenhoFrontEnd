import Item from "@/components/Item/Item"

export  default function Question5(){
    return (
        <div className='w-full h-full flex flex-col gap-1 p-10'>
            <h2 className="font-bold text-2xl">Quesito 5 - Desenvolvimento Profissional </h2>
      
            <Item
                item="5.1"
                nameRadio="5.1"
                title=""
                description="Exemplo: Cursos Promovidos pela empresa 80 Horas 4 Pontos"
                person={false}
                recognition = {false}
                course value={4} />
            <Item
                item="5.2"
                nameRadio="5.2"
                title=""
                description="Exemplo: Cursos Promovidos pela empresa 40 Horas 3 Pontos"
                person={false}
                recognition = {false}
                course value={3} />
            <Item
                item="5.3"
                nameRadio="5.3"
                title=""
                description="Exemplo: Cursos técnicos 80 Horas 5 Pontos"
                person={false}
                recognition = {false}
                course
                value={5} />
            <Item
                item="5.4"
                nameRadio="5.4"
                title=""
                description="Exemplo: Cursos Gestão pública 20 Horas 1 Ponto"
                person={false}
                recognition = {false}
                course
                value={1} />
            <Item
                item="5.4"
                nameRadio="5.4"
                title=""
                description="Exemplo: Doutorado 10 Pontos"
                person={false}
                recognition = {false}
                course
                value={10} />
            <Item
                item="5.4"
                nameRadio="5.4"
                title=""
                description="Exemplo: Mestrado 9 Pontos"
                person={false}
                recognition = {false}
                course
                value={9} />
            <Item
                item="5.4"
                nameRadio="5.4"
                title=""
                description="Exemplo: Pós-graduação 8 Pontos"
                person={false}
                recognition = {false}
                course
                value={8} />
            <Item 
                item="5.4"
                nameRadio="5.4"
                title=""
                description="Exemplo: Graduação 7 Pontos"
                person={false}
                recognition = {false}
                course
                value={7} />
            {/* <Item item="5.5"  nameRadio="5.5"  title="" description="Exemplo: Doutorado(10 Pontos,)Mestrado(9 Pontos),Especialização(8 Pontos),Graduação( 7 Pontos)..." person={false} recognition = {false} course list={true} /> */}
            
                                    
        </div>
    )
}

