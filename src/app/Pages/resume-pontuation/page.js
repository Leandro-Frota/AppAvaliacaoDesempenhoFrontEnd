'use client'
import ResumeQuestion from "@/components/ResumeQuestion/ResumeQuestion"
import { getEmployees } from "@/service/apiService"
import { useState,useEffect} from "react";
import SearchEmployee from "@/components/SearchEmployee/SearchEmployee"


export  default function ResumePontuation(){

    const [values, setValues] = useState();
    const [employeeFilter, setEmployeeFilter] = useState([]);

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
            <SearchEmployee listValuesEmployee={values} setEmployeeFilter={setEmployeeFilter}/>                      
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