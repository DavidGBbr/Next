import { getAula } from "@/api/cursos";
import React from "react";

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

const AulaPage = async ({ params }: PageParams) => {
  const aula = await getAula(params.curso, params.aula);
  return (
    <main>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Duração: {aula.tempo}</p>
    </main>
  );
};

export default AulaPage;
