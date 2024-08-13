import InputLabel from "@/components/InputLabel/InputLabel";

export default function Register(){
    return (
        <div className="flex flex-col  gap-2 min-w-max">
            <InputLabel label="Nome" type="text"/>
            <InputLabel label="Matrícula" type="number"/>
            <InputLabel label="Função" type="text"/>
            <InputLabel label="Gerência" type="text"/>
            
        </div>
    )
}