import React from "react";

export type Produto = {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

const ProdutosLista = async ({ espera }: { espera?: number }) => {
  let produtos: Produto[] = [];
  if (espera) await new Promise((resolve) => setTimeout(resolve, espera));
  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      cache: "no-store",
      // next: {
      //   revalidate: 5,
      // },
    });
    if (!response.ok) throw new Error("Erro ao carregar os produtos.");
    produtos = (await response.json()) as Produto[];
  } catch (error) {
    return <p>Ocorreu um erro nessa lista de produtos.</p>;
  }
  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          {produto.nome}: R${produto.preco}
        </li>
      ))}
    </ul>
  );
};

export default ProdutosLista;
