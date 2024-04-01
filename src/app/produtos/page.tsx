import ProdutosLista from "@/components/produtos-lista";
import React, { Suspense } from "react";

const ProdutosPage = async () => {
  return (
    <main>
      <h1>Produtos</h1>
      <p>Essa aqui é a lista de produtos</p>
      <Suspense fallback={"Carregando..."}>
        <ProdutosLista />
      </Suspense>
      <Suspense fallback={"Carregando..."}>
        <ProdutosLista espera={500} />
      </Suspense>
    </main>
  );
};

export default ProdutosPage;
