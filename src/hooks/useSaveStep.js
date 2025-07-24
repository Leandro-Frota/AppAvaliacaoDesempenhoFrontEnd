
'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveStepData } from "@/service/apiService";

export default function useSaveStep(){
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const saveStep = async (stepName, values,nextPage) => {
        const employeeId = localStorage.getItem('employeeId');
        if (!employeeId) {
            console.error("Employee ID not found in localStorage.");
            return;
        }
        setIsLoading(true);
        try {
            await saveStepData(employeeId, stepName, values);
            if (nextPage) {
                router.push(nextPage); // Redirect to the next page if provided
            }
        } catch (error) {
            console.error("Error saving step data:", error);
            alert("Erro ao salvar os dados da etapa. Tente novamente mais tarde.");
        }
        finally {
            setIsLoading(false);
        }
    }
    return { isLoading, saveStep };
}