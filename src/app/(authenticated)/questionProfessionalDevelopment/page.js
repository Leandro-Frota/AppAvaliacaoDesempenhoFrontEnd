"use client";
import Item from "@/components/Item/Item";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { saveStepData } from "@/service/apiService";
import ModalIsLoading from "@/components/IsLoading/ModalIsLoading";
import ButtonSubmit from "@/components/ButtonSubmit/ButtonSubmit";
import useSaveStep from "@/hooks/useSaveStep";

export default function Question5() {
  const { isLoading, saveStep } = useSaveStep();
  const [values, setValues] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveStep(
      "Professional Development",
      values,
      "/questionInternalRecognition"
    );
  };

  const questions = [
    {
      id: 5.1,
      title: "Cursos Promovidos pela empresa",
      description:
        "Conteúdo dentro da área de atuação com carga horária de 80 Horas (4 Pontos)",
      value: 4,
    },
    {
      id: 5.2,
      title: "Cursos Promovidos pela empresa",
      description:
        "Conteúdo dentro da área de atuação com carga horária de 40 Horas (2 Pontos)",
      value: 2,
    },
    {
      id: 5.3,
      title: "Cursos técnicos",
      description:
        "Conteúdo dentro da área de atuação, a expensas do funcionários, com carga horária de 80 Horas (5 Pontos)",
      value: 5,
    },
    {
      id: 5.4,
      title: "Cursos da EGP",
      description:
        "Conteúdo dentro da área de atuação com carga horária de 20 Horas 1 Ponto",
      value: 1,
    },
    {
      id: 5.5,
      title: "Outros cursos",
      description: "Doutorado 10 Pontos",
      value: 10,
    },
    {
      id: 5.6,
      title: "Outros cursos",
      description: "Mestrado 9 Pontos",
      value: 9,
    },
    {
      id: 5.7,
      title: "Outros cursos",
      description: "Pós-graduação 8 Pontos",
      value: 8,
    },
    {
      id: 5.8,
      title: "Outros cursos",
      description: "Graduação 7 Pontos",
      value: 7,
    },
  ];

  const handleCheckBoxChange = useCallback(
    (item, score, nameCourse, description) => {
      setValues((prevValues) => {
        const newValues = {
          ...prevValues,
          [item]: { description, score, nameCourse },
        };
        //ordenar os valores do objeto
        const sortedEntries = Object.entries(newValues)
          .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
          .reduce((acc, [key, val]) => {
            acc[key] = val;
            return acc;
          }, {});

        return sortedEntries;
      });
    },
    []
  );

  return (
    <div className="w-full h-full flex flex-col gap-1 p-10">
      {isLoading && (
        <ModalIsLoading isLoading={isLoading} message="Enviando Dados" />
      )}
      <h2 className="font-bold text-2xl">
        Quesito 5 - Desenvolvimento Profissional{" "}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5">
        <p className="text-start">
          Avalie o colaborador de acordo com os critérios abaixo:
        </p>
        <p className="text-sm text-gray-500">
          Selecione os cursos realizados pelo colaborador, digite o nome do
          curso e clique em avançar.
        </p>
        {questions.map((question) => (
          <Item
            key={question.id}
            item={question.id}
            nameRadio={question.id}
            title={question.title}
            description={question.description}
            person={false}
            recognition={false}
            course
            value={question.value}
            handleCheckBoxChange={handleCheckBoxChange}
          />
        ))}
        <ButtonSubmit type="submit" text="Avançar" disabled={isLoading} />
      </form>
    </div>
  );
}
