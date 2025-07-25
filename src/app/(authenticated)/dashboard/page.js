"use client";
import React, { useEffect, useState } from "react";
import {
  getEmployees,
  updateDataRegisterEmployee,
  deleteEmployee,
} from "@/service/apiService";
import { Pencil, TrashSimple } from "@phosphor-icons/react/dist/ssr";
import EditDataRegisterEmployeeModal from "@/components/Modal/EditDataRegisterEmployeeModal";
import ModalIsLoading from "@/components/IsLoading/ModalIsLoading";
import DeleteRegisterEmployeeModal from "@/components/Modal/DeleteRegisterEmployeeModal";
import SearchEmployee from "@/components/SearchEmployee/SearchEmployee";

export default function Dashboard() {
  const [employeeListRegistered, setEmployeeListRegistered] = useState([]);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [employeeDataToUpdate, setEmployeeDataToUpdate] = useState({});
  const [employeeToDelete, setEmployeeToDelete] = useState({});
  const [employeeFilter, setEmployeeFilter] = useState([]);

  const employeeListSearch =
    employeeFilter.length > 0 ? employeeFilter : employeeListRegistered;

  const fetchEmployees = async () => {
    setIsLoading(true);
    try {
      const response = await getEmployees();
      console.log("Response", response.data);
      if (!response || response.data.length === 0) {
        alert(
          "Lista de funcionários não encontrada ou não há empregados cadastrados. Tente novamente."
        );
        return;
      }
      setEmployeeListRegistered(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
      alert("Erro ao buscar funcionários. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const HandleDeleteEmployee = (employeeDeleted) => {
    setEmployeeToDelete(employeeDeleted);
    setIsModalDeleteOpen(true);
  };
  const HandleEditEmployee = (employeeDataToUpdate) => {
    setIsModalUpdateOpen(true);
    setEmployeeDataToUpdate(employeeDataToUpdate);
  };
  const saveDataEmployeeUpdate = async (employeeId, data) => {
    try {
      const response = await updateDataRegisterEmployee(employeeId, data);
      console.log("Response", response.data);
      if (response.status === 200) {
        alert("Dados do funcionário atualizados com sucesso!");
        fetchEmployees();
      } else {
        alert("Erro ao atualizar os dados do funcionário. Tente novamente.");
      }
    } catch (error) {
      console.error("Error updating employee data:", error);
      alert(
        "Erro ao atualizar os dados do funcionário. Tente novamente mais tarde."
      );
    } finally {
      setIsModalUpdateOpen(false);
    }
  };
  const deleteEmployeeById = (employeeId) => {
    try {
      deleteEmployee(employeeId);
      setEmployeeListRegistered((prevList) =>
        prevList.filter((item) => item._id !== employeeId._id)
      );
      alert("Funcionário deletado com sucesso!");
      fetchEmployees(); // Recarrega a lista de funcionários após a exclusão
      setIsModalDeleteOpen(false);
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Erro ao deletar funcionário. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-2 p-10">
      {isLoading && (
        <ModalIsLoading
          isLoading={isLoading}
          message="Carregando dados do funcionário..."
        />
      )}
      {isModalUpdateOpen && (
        <EditDataRegisterEmployeeModal
          isOpen={isModalUpdateOpen}
          setIsOpen={setIsModalUpdateOpen}
          employeeDataToUpdate={employeeDataToUpdate}
          saveDataEmployeeUpdate={saveDataEmployeeUpdate}
        />
      )}
      {isModalDeleteOpen && (
        <DeleteRegisterEmployeeModal
          isOpen={isModalDeleteOpen}
          setIsOpen={setIsModalDeleteOpen}
          employeeIdDeleteData={employeeToDelete}
          deleteEmployeeById={deleteEmployeeById}
        />
      )}
      <h1 className="font-bold text-2xl">Funcionários Cadastrados</h1>
      <p className="text-start mt-4">
        Aqui estão os funcionários cadastrados no sistema. Você pode editar ou
        deletar os registros conforme nescessário.
      </p>
      <SearchEmployee
        listValuesEmployee={employeeListRegistered}
        setEmployeeFilter={setEmployeeFilter}
      />
      <table className="w-full mt-4  border-collapse border border-gray-300 rounded">
        <thead className="bg-gray-200 p-2">
          <tr className="border border-gray-300">
            <th className="text-start p-3">Nome</th>
            <th className="text-start p-3">Cargo</th>
            <th className="text-start p-3">Matrícula</th>
            <th className="text-start p-3">Gerência</th>
            <th className="text-start p-3">Status</th>
            <th className="text-center p-3">Ações</th>
            {/* <th className="border border-gray-300 p-2">Deletar</th> */}
          </tr>
        </thead>
        <tbody className="bg-white p-2">
          {employeeListSearch.map((item) => (
            <tr key={item._id} className="border border-gray-300 text-center">
              <td className="text-start p-3">{item.name}</td>
              <td className="text-blue-700 text-start p-3">{item.office}</td>
              <td className="text-start p-3">{item.registration}</td>
              <td className="text-blue-700 text-start p-3">
                {item.management}
              </td>
              <td className="text-start p-3">
                <span
                  className={`px-2 py-1 rounded-full text-white ${
                    item.status === "Em andamento"
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="text-center p-3">
                <div className="flex gap-2 justify-center items-center">
                  <Pencil
                    onClick={() => HandleEditEmployee(item)}
                    className="cursor-pointer rounded m-1 hover:bg-green-700 hover:text-white text-gray-500"
                    size={20}
                  />
                  <TrashSimple
                    onClick={() => HandleDeleteEmployee(item)}
                    className="cursor-pointer rounded hover:red-blue-800  hover:bg-red-700 hover:text-white text-gray-500"
                    size={20}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
