type PageParams = {
  params: {
    slug: string[];
  };
};

export default async function CursoPage({ params }: PageParams) {
  console.log(params);
  return (
    <main>
      <h1>Cursos</h1>
      <p>{params.slug.join("/")}</p>
    </main>
  );
}
