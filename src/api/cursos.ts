export type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: string;
  tempo: number;
  order: number;
};

export const getCursos = async () => {
  const response = await fetch("https://api.origamid.online/cursos");
  return (await response.json()) as Curso[];
};

export const getCurso = async (curso: string) => {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
  return (await response.json()) as Curso & { aulas: Aula[] };
};

export const getAula = async (curso: string, aula: string) => {
  const response = await fetch(
    `https://api.origamid.online/cursos/${curso}/${aula}`
  );
  return (await response.json()) as Aula;
};
