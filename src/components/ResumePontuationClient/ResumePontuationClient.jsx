'use client';

import { useState } from "react";
import SearchEmployee from "@/components/SearchEmployee/SearchEmployee";
import ResumeQuestion from "@/components/ResumeQuestion/ResumeQuestion";

export default function ResumePontuationClient({ values }) {
  const [employeeFilter, setEmployeeFilter] = useState([]);

  return (
    <div className='w-full h-full flex flex-col gap-2 p-10'>
      <h1 className="font-bold text-2xl">Resumo da Avaliação por Funcionário</h1>
      <SearchEmployee listValuesEmployee={values} setEmployeeFilter={setEmployeeFilter} />
      <ResumeQuestion employee={employeeFilter} />
    </div>
  );
}
