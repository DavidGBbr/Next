import React from "react";

export type Produto = {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

const ProdutosPage = async () => {
  const response = await fetch("https://api.origamid.online/produtos", {
    next: {
      revalidate: 5,
    },
  });
  const produtos = (await response.json()) as Produto[];

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome}: R${produto.preco}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProdutosPage;
