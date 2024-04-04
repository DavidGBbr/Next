import { getCursos } from "@/api/cursos";
import Link from "next/link";

export async function generateStaticParams() {
  const cursos = await getCursos();
  return cursos.map((curso) => ({
    curso: curso.slug,
  }));
}

export default async function CursosPage() {
  const cursos = await getCursos();
  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
