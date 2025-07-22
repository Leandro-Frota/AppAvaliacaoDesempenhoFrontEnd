"use client";
import { useState } from "react";
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react/dist/ssr";
import InputLabel from "../InputLabel/InputLabel";

export default function SearchEmployee({
  listValuesEmployee,
  setEmployeeFilter,
}) {
  const [employeeSearch, setEmployeeSearch] = useState("");
  console.log(employeeSearch);

  const handleFilterChange = (value) => {
    setEmployeeSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!listValuesEmployee || listValuesEmployee.length === 0) {
      alert("Lista de funcionários não encontrada. Tente novamente.");
      return;
    }

    if (!employeeSearch.trim()) {
      alert("Digite um nome para buscar.");
      return;
    }
    const employeeFound = listValuesEmployee.filter((employee) =>
      (employee?.name || "")
        .toLowerCase()
        .includes(employeeSearch.toLowerCase())
    );
    setEmployeeFilter(employeeFound);

    if (employeeFound.length === 0) {
      alert("Funcionário não encontrado. Tente novamente.");
    }
    setEmployeeSearch("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row align-middle gap-2 w-full "
      >
        <div className="relative w-full">
          <InputLabel
            name="buscar"
            label=""
            type="text"
            className="border-2 px-10 border-gray-300 rounded outline-2px-solid p-2 w-full"
            placeholder="Nome"
            value={employeeSearch}
            captureOnChangeText={handleFilterChange}
            size={64}
          />
          <button
            className="absolute top-1  text-gray-400 rounded p-3"
            type="submit"
          >
            <MagnifyingGlass size={19} color="#9ca3af" />
          </button>
          <button
            className="absolute top-0 right-0 text-white rounded p-3 mt-1"
            type="button"
            onClick={() => setEmployeeFilter([])}
          >
            <XCircle size={19} color="#9ca3af" />
          </button>
        </div>
      </form>
    </>
  );
}
