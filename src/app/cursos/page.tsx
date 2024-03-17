import { getCursos } from "@/api/cursos";
import Link from "next/link";
import React from "react";

const CursosPage = async () => {
  const cursos = await getCursos();
  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={`cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CursosPage;
