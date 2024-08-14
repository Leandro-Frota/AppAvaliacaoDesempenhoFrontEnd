import InputLabel from "@/components/InputLabel/InputLabel";

export default function Register(){
    return (
        <div className="w-3/6">
            <div className="text-start text-xl">
                <h2>Cadastro de Funcionário</h2>
            </div>
            <div className="flex flex-col  gap-2 w-3/6 ">
                <InputLabel label="Nome" type="text"/>
                <InputLabel label="Matrícula" type="number"/>
                <InputLabel label="Função" type="text"/>
                <InputLabel label="Gerência" type="text"/>
                
            </div>  

        </div>
        
    )
}