'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

export default function EditDataRegisterEmployeeModal({isOpen, setIsOpen, employeeDataToUpdate, saveDataEmployeeUpdate}) {
 
    const [name, setName] = useState("");
    const [registration, setRegistration] = useState("");
    const [office, setOffice] = useState("");
    const [management, setManagement] = useState("");

    useEffect(() => {
        if (employeeDataToUpdate) {
            setName(employeeDataToUpdate.name || "");
            setRegistration(employeeDataToUpdate.registration || "");
            setOffice(employeeDataToUpdate.office || "");
            setManagement(employeeDataToUpdate.management || "");
        }
    }, [employeeDataToUpdate]);

    const onSubmit = (e) => {
        e.preventDefault();        
        const data = {
            name: name,
            registration: registration,
            office: office,
            management: management
        };

        if(!employeeDataToUpdate || !employeeDataToUpdate._id) {
            alert("Dados do funcionário não encontrados. Tente novamente.");
            return;
        }
        saveDataEmployeeUpdate(employeeDataToUpdate._id, data);
    }

    if (!isOpen) return null;

    return(
        <div className="flex flex-col fixed inset-0 z-50 items-center justify-center min-h-screen bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl text-center font-semibold mb-4">Editar dados do funcionário</h2>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Matrícula</label>
                        <input value={registration} onChange={(e)=>{setRegistration(e.target.value)}} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                        <input value={office} onChange={(e)=>{setOffice(e.target.value)}} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gerência</label>
                        <input value={management} onChange={(e)=>{setManagement(e.target.value)}} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                    </div>
                    <ButtonSubmit text='Salvar alterações' type='submit' onClick={onSubmit}/>
                    <button type="button" onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 mb-2">Fechar sem salvar</button>

                </form>
            </div>
        </div>
     )
}