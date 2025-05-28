'use client';
import React, { useEffect, useState } from 'react';
import { getEmployees } from '@/service/apiService';
import { Pencil, TrashSimple } from '@phosphor-icons/react/dist/ssr';

export default function Dashboard() {
     const [employeeListRegistered, setEmployeeListRegistered] = useState([]);
     console.log('employeeListRegistered', employeeListRegistered);
    
        useEffect(() => {
            const fetchEmployees = async () => {
                try{
                    const response = await getEmployees();
                    console.log('Response',response.data);
                    if(!response || response.data.length === 0){
                        alert("Lista de funcionários não encontrada ou não há empregados cadastrados. Tente novamente.");
                        return;
                    }
                    setEmployeeListRegistered(response.data);
                    console.log('Setado no estado:', response.data);
                }catch (error) {
                    console.error("Error fetching employees:", error);
                    alert("Erro ao buscar funcionários. Tente novamente mais tarde.");
                }
            };
            fetchEmployees();
        }, []);

        const HandleDeleteEmployee = (id) => {
            return (
                console.log("Deletar funcionário clicado",id)
            )
        }
        const HandleEditEmployee = (id) => {
            return (
                console.log("Editar funcionário clicado",id)
            )
        }       

    return(
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <h1 className="font-bold text-2xl">Funcionários Cadastrados</h1>
            <p className="text-start mt-4">Aqui estão os funcionários cadastrados no sistema. Você pode editar ou deletar os registros conforme nescessário.</p>
                <table className="w-full mt-4 border-collapse border border-gray-300">
                    <thead className="bg-gray-200 p-2">
                        <tr className="border border-gray-300">
                            <th className="border border-gray-300 p-2">Nome</th>
                            <th className="border border-gray-300 p-2">Cargo</th>
                            <th className="border border-gray-300 p-2">Matrícula</th>
                            <th className="border border-gray-300 p-2">Gerência</th>
                            <th className="border border-gray-300 p-2">Açoes</th>
                            {/* <th className="border border-gray-300 p-2">Deletar</th> */}
                        </tr>
                    </thead>
                    <tbody className="bg-white p-2">
                        {employeeListRegistered.map((item) => (
                        <tr key={item._id} className="border border-gray-300 text-center">
                            <td className="border border-gray-300">{item.name}</td>
                            <td className="border border-gray-300">{item.office}</td>
                            <td className="border border-gray-300">{item.registration}</td>
                            <td className="border border-gray-300">{item.management}</td>
                            <td className=" border border-gray-300">
                                <div className='flex gap-2 justify-center'>
                                    <Pencil onClick={()=>HandleEditEmployee(item._id)}  className='cursor-pointer text-gray-500' size={20} />
                                    <TrashSimple onClick={()=>HandleDeleteEmployee(item._id)} className='cursor-pointer text-gray-500' size={20}/>
                                </div>
                            </td>

                        </tr>
                        ))}
                    </tbody>
                </table>                    
            </div>
        )
 }