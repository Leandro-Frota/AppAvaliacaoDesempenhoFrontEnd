'use client'
import Item from "@/components/Item/Item"
import ResumeQuestion from "@/components/ResumeQuestion/ResumeQuestion"
import InputLabel from "@/components/InputLabel/InputLabel"
import { getEmployees } from "@/service/apiService"
import { useState,useEffect} from "react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"


export  default function ResumePontuation(){

    const [values, setValues] = useState();
    const [employeeSearch, setEmployeeSearch] = useState('');
    const [employeeFilter, setEmployeeFilter] = useState([]);

    const handleFilterChange = (value) => {
        setEmployeeSearch(value);
    }

    const handleSubmit =  (e) => {
        e.preventDefault();       
        if(!values){
            alert("Lista de funcionários não encontrada. Tente novamente.");
            return;
        }
        const employeeFound = values.filter(employee =>(employee?.name || "").toLowerCase().includes(employeeSearch.toLowerCase()));
        setEmployeeFilter(employeeFound);

        if(employeeFound.length === 0){
            alert("Funcionário não encontrado. Tente novamente.");          
        }
        setEmployeeSearch('');

    }

    useEffect(() => {
        const fetchEmployees = async () => {
            try{
                const response = await getEmployees();
                console.log('Response',response.data);
                setValues(response.data);
            }catch (error) {
                console.error("Error fetching employees:", error);
                alert("Erro ao buscar funcionários. Tente novamente mais tarde.");
            }
        };
        fetchEmployees();
    }, []);

    return (
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <h1 className="font-bold text-2xl">Resumo da Avaliação</h1>
            <form onSubmit={handleSubmit} className="flex flex-row gap-2 w-full ">
                <InputLabel
                        name="buscar"
                        label=""
                        type="text"
                        className="border-2 border-gray-300 rounded outline-2px-solid p-1 w-100"
                        placeholder="Nome"
                        value={employeeSearch}
                        captureOnChangeText={handleFilterChange}
                        size={64}
                />
                <button className="bg-blue-500 text-white rounded px-2 py-1 mt-1"
                        type="submit">
                        <MagnifyingGlass size={16} color="#faf5f5" />
                </button>
            </form>           
                {employeeFilter.map((employee) => (
                    <div key={employee.id} className="flex flex-col gap-2 border-b-2 border-gray-300 p-2">
                        <h2 className="font-bold text-xl">{employee.name}</h2>
                        <div className="flex flex-row gap-4">
                            <p className="text-gray-600">Cargo: {employee.office}</p>
                            <p className="text-gray-600">Matrícula: {employee.registration}</p>
                            <p className="text-gray-600">Gerência: {employee.management}</p>
                        </div>
                        <ResumeQuestion key={employee.id} employee={employee}/>                    
                    </div>                    
                ))}                     
                                        
        </div>
    )
}