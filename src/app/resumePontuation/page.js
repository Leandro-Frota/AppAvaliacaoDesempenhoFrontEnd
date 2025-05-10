'use client'
import ResumeQuestion from "@/components/ResumeQuestion/ResumeQuestion"
import { getEmployees } from "@/service/apiService"
import { useState,useEffect} from "react";
import SearchEmployee from "@/components/SearchEmployee/SearchEmployee"


export  default function ResumePontuation(){

    const [values, setValues] = useState();
    const [employeeFilter, setEmployeeFilter] = useState([]);
    console.log('employeeFilter', employeeFilter);

    useEffect(() => {
        const fetchEmployees = async () => {
            try{
                const response = await getEmployees();
                console.log('Response',response.data);
                setValues(response.data);
            }catch (error) {
                console.error("Error fetching employees:", error);
                // alert("Erro ao buscar funcionários. Tente novamente mais tarde.");
            }
        };
        fetchEmployees();
    }, []);

    return (
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <h1 className="font-bold text-2xl">Resumo da Avaliação</h1>
            <SearchEmployee listValuesEmployee={values} setEmployeeFilter={setEmployeeFilter}/>                      
            <ResumeQuestion  employee={employeeFilter}/>              
                                        
        </div>
    )
}