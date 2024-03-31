import ProdutosLista from "@/components/produtos-lista";
import React from "react";

const ProdutosPage = async () => {
  return (
    <main>
      <h1>Produtos</h1>
      <p>Essa aqui é a lista de produtos</p>
      <ProdutosLista />
    </main>
  );
};

export default ProdutosPage;
