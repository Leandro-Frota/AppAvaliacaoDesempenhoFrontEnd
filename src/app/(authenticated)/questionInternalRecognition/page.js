"use client";
import Item from "@/components/Item/Item";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { saveStepData } from "@/service/apiService";
import ModalIsLoading from "@/components/IsLoading/ModalIsLoading";
import ButtonSubmit from "@/components/ButtonSubmit/ButtonSubmit";
import { updateDataRegisterEmployee } from "@/service/apiService";
import useSaveStep from "@/hooks/useSaveStep";

export default function QuestionInternalRecognition() {
    const { isLoading, saveStep } = useSaveStep();
  const [values, setValues] = useState({});
  const statusForm = { status: "Concluído" };

  const handleNumberChange = useCallback((item, score, description) => {
    setValues((prevValues) => ({
      ...prevValues,
      [item]: { description, score },
    }));
  }, []);

  const saveDataEmployeeUpdate = async (employeeId, data) => {
    try {
      const response = await updateDataRegisterEmployee(employeeId, data);
      console.log("Response", response.data);
      if (response.status === 200) {
        alert("Questionário concluido com sucesso!");
      } else {
        alert("Erro ao atualizar os dados do funcionário. Tente novamente.");
      }
    } catch (error) {
      console.error("Error updating employee data:", error);
      alert(
        "Erro ao atualizar o status de andamento do questionário. Tente novamente mais tarde."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveStep("Internal Recognition", values, "/about");
    saveDataEmployeeUpdate(employeeId, statusForm);
};

  const descriptionItems = {
    description1:
      "Realiza o trabalho de forma equilibrada, mantendo a calma em situações de pressão e estresse. Cada elogia registra um ponto positivo.",
    description2:
      "Trata a todos com presteza, respeito e educação, promovendo um ambiente de trabalho harmonioso. Cada honra ao mérito registra um ponto positivo.",
  };

  const questions = [
    { id: 6.1, title: "Elogio", description: descriptionItems.description1 },
    {
      id: 6.2,
      title: "Honra ao mérito",
      description: descriptionItems.description2,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-1 p-10">
      {isLoading && (
        <ModalIsLoading isLoading={isLoading} message="Enviando Dados" />
      )}
      <h2 className="font-bold text-2xl">
        Quesito 6 - Reconhecimento interno{" "}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <p className="text-gray-600">
          Para cada elogio ou honra ao mérito, registre um ponto positivo. O
          total de pontos será somado ao final do processo.
        </p>
        {questions.map((question) => (
          <Item
            key={question.id}
            item={question.id}
            nameRadio={question.id}
            title={question.title}
            description={question.description}
            person={false}
            course={false}
            recognition={true}
            handleNumberChange={handleNumberChange}
            required={true}
          />
        ))}
        <ButtonSubmit type="submit" text="Concluir" disabled={isLoading} />
      </form>
    </div>
  );
}
