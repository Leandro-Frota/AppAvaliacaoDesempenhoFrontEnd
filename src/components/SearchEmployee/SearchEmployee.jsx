'use client'
import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import InputLabel from "../InputLabel/InputLabel";



export default function SearchEmployee({listValuesEmployee,setEmployeeFilter}){
        const [employeeSearch, setEmployeeSearch] = useState('');

        if(!Array.isArray(listValuesEmployee)){
            return null
        }

        const handleFilterChange = (value) => {
            setEmployeeSearch(value);
        }
        
        const handleSubmit =  (e) => {
            e.preventDefault();       
            if(!listValuesEmployee || listValuesEmployee.length === 0){
                alert("Lista de funcionários não encontrada. Tente novamente.");
                return;
            }
            const employeeFound = listValuesEmployee.filter(employee =>(employee?.name || "").toLowerCase().includes(employeeSearch.toLowerCase()));
            setEmployeeFilter(employeeFound);

            if(employeeFound.length === 0){
                alert("Funcionário não encontrado. Tente novamente.");          
            }
            setEmployeeSearch('');

        }
        return(
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
            {/* <select name="employee" id="employeeSelect">
                {listValuesEmployee.map((employee) => (
                    <option key={employee._id} value={employee.name}>
                        {employee.name}
                    </option>
                ))}
            </select> */}
            <button className="bg-blue-500 text-white rounded px-2 py-1 mt-1"
                    type="submit">
                    <MagnifyingGlass size={16} color="#faf5f5" />
            </button>
            <button className="bg-red-500 text-white rounded px-2 py-1 mt-1"
                    type="button"
                    onClick={() => setEmployeeFilter([])}>
                    Limpar
            </button>
            </form>
    )}