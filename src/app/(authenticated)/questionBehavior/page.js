"use client";
import Item from "@/components/Item/Item";
import { useCallback, useState } from "react";
import ButtonSubmit from "@/components/ButtonSubmit/ButtonSubmit";
import ModalIsLoading from "@/components/IsLoading/ModalIsLoading";
import useSaveStep from "@/hooks/useSaveStep";

export default function Question4() {
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
    await saveStep("Behavior", values, "/questionProfessionalDevelopment");
  };

  const descriptionItems = {
    description1:
      "O empregado demonstra equilíbrio emocional, mantendo a calma em situações de pressão e estresse.",
    description2:
      "Mantém um bom relacionamento interpessoal, respeitando as diferenças e promovendo um ambiente de trabalho harmonioso.",
    description3:
      "Demonstra iniciativa na execução de tarefas e na busca de soluções para problemas.",
    description4:
      "Segue normas e procedimentos estabelecidos, demonstrando comprometimento com a disciplina organizacional.",
  };

  const questions = [
    {
      id: 4.1,
      title: "Equilíbrio",
      description: descriptionItems.description1,
    },
    {
      id: 4.2,
      title: "Relacionamento Interpessoal",
      description: descriptionItems.description2,
    },
    {
      id: 4.3,
      title: "Iniciativa",
      description: descriptionItems.description3,
    },
    {
      id: 4.4,
      title: "Disciplina",
      description: descriptionItems.description4,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-1 p-10">
      {isLoading && (
        <ModalIsLoading isLoading={isLoading} message="Enviando Dados" />
      )}
      <h2 className="font-bold text-2xl text-center">
        Quesito 4 - Comportamento{" "}
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
