"use client";
import Item from "@/components/Item/Item";
import { useCallback, useState } from "react";
import ButtonSubmit from "@/components/ButtonSubmit/ButtonSubmit";
import ModalIsLoading from "@/components/IsLoading/ModalIsLoading";
import useSaveStep from "@/hooks/useSaveStep";

export default function QuestionTeamWork() {
  const { isLoading, saveStep } = useSaveStep();
  const [values, setValues] = useState({});

  const handleRadioChange = useCallback(
    (item, score, justification, description) => {
      setValues((prevValues) => ({
        ...prevValues,
        [item]: { description, score, justification },
      }));
    },
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveStep("Team Work", values, "/questionCommimentResults");
  };

  const descriptionItems = {
    description1:
      "O empregado mantém bom relacionamento com os colegas, respeitando as diferenças e promovendo um ambiente de trabalho harmonioso.",
    description2:
      "Coopera com os colegas, compartilhando informações e ajudando na resolução de problemas em equipe.",
  };
  const questions = [
    { id: 2.1, title: "Interação", description: descriptionItems.description1 },
    {
      id: 2.2,
      title: "Cooperação",
      description: descriptionItems.description2,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-1 p-10">
      {isLoading && (
        <ModalIsLoading isLoading={isLoading} message="Enviando Dados" />
      )}
      <h2 className="font-bold text-2xl text-center">
        Quesito 2 - Trabalho em equipe{" "}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5">
        <p className="text-start">
          Avalie o colaborador de acordo com os critérios abaixo:
        </p>
        {questions.map((question) => (
          <Item
            key={question.id}
            item={question.id}
            nameRadio={question.id}
            title={question.title}
            description={question.description}
            person
            course={false}
            recognition={false}
            handleRadioChange={handleRadioChange}
          />
        ))}
        <ButtonSubmit type="submit" text="Avançar" disabled={isLoading} />
      </form>
    </div>
  );
}
