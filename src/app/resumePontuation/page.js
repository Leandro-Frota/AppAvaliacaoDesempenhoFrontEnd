
import ResumePontuationClient from "@/components/ResumePontuationClient/ResumePontuationClient";

export const dynamic = 'force-dynamic'; // evita caching do lado do servidor

export default async function ResumePontuationPage() {
  const res = await fetch("http://localhost:3001/employees", { cache: 'no-store' });
  const employees = await res.json();

  return <ResumePontuationClient values={employees} />;
}
