'use client';
import React, { useEffect, useState } from 'react';
import { getEmployees, updateDataRegisterEmployee,deleteEmployee } from '@/service/apiService';
import { Pencil, TrashSimple } from '@phosphor-icons/react/dist/ssr';
import EditDataRegisterEmployeeModal from '@/components/Modal/EditDataRegisterEmployeeModal';

export default function Dashboard() {
    const [employeeListRegistered, setEmployeeListRegistered] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employeeDataToUpdate, setEmployeeDataToUpdate] = useState({});

    const fetchEmployees = async () => {
        try{
            const response = await getEmployees();
            console.log('Response',response.data);
            if(!response || response.data.length === 0){
                alert("Lista de funcionários não encontrada ou não há empregados cadastrados. Tente novamente.");
                return;
            }
            setEmployeeListRegistered(response.data);
        }catch (error) {
            console.error("Error fetching employees:", error);
            alert("Erro ao buscar funcionários. Tente novamente mais tarde.");
        }
    };

    useEffect(() => {            
        fetchEmployees();
    }, []);

    const HandleDeleteEmployee = (id) => {        
        const employeeDeleted = deleteEmployee(id)
        if(employeeDeleted){
            setEmployeeListRegistered(prevList => prevList.filter(item => item._id !== id));
            alert(`Funcionário deletado com sucesso!`);
        }

    }
    const HandleEditEmployee = (employeeDataToUpdate) => {
        setIsModalOpen(true);
        setEmployeeDataToUpdate(employeeDataToUpdate);
    }
    const saveDataEmployeeUpdate = async (employeeId, data) => {
        try {
            const response = await updateDataRegisterEmployee(employeeId, data);
            console.log('Response', response.data);
            if (response.status === 200) {
                alert("Dados do funcionário atualizados com sucesso!");
                setIsModalOpen(false);
                fetchEmployees(); // Recarrega a lista de funcionários após a atualização
            } else {
                alert("Erro ao atualizar os dados do funcionário. Tente novamente.");
            }
        } catch (error) {
            console.error("Error updating employee data:", error);
            alert("Erro ao atualizar os dados do funcionário. Tente novamente mais tarde.");
        }
    }       

    return(
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            {isModalOpen && <EditDataRegisterEmployeeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} employeeDataToUpdate={employeeDataToUpdate} saveDataEmployeeUpdate={saveDataEmployeeUpdate}/>}
            <h1 className="font-bold text-2xl">Funcionários Cadastrados</h1>
            <p className="text-start mt-4">Aqui estão os funcionários cadastrados no sistema. Você pode editar ou deletar os registros conforme nescessário.</p>
                <table className="w-full mt-4 border-collapse border border-gray-300">
                    <thead className="bg-gray-200 p-2">
                        <tr className="border border-gray-300">
                            <th className="border border-gray-300 p-2">Nome</th>
                            <th className="border border-gray-300 p-2">Cargo</th>
                            <th className="border border-gray-300 p-2">Matrícula</th>
                            <th className="border border-gray-300 p-2">Gerência</th>
                            <th className="border border-gray-300 p-2">Ações</th>
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
                                <div className='flex gap-2 justify-center items-center'>
                                    <Pencil onClick={()=>HandleEditEmployee(item)}  className='cursor-pointer rounded m-1 hover:bg-green-700 hover:text-white text-gray-500' size={20} />
                                    <TrashSimple onClick={()=>HandleDeleteEmployee(item._id)} className='cursor-pointer rounded hover:red-blue-800  hover:bg-red-700 hover:text-white text-gray-500' size={20}/>
                                </div>
                            </td>

                        </tr>
                        ))}
                    </tbody>
                </table>                    
            </div>
        )
 }