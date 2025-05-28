
import ResumePontuationClient from "@/components/ResumePontuationClient/ResumePontuationClient";
import { getEmployees } from "@/service/apiService";

export const dynamic = 'force-dynamic'; // evita caching do lado do servidor

export default async function ResumePontuationPage() {
  const response = getEmployees();
  const employees = await response.then(res => res.data);
  return <ResumePontuationClient values={employees} />;
}
