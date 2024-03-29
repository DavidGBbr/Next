"use client";
import { addProduct } from "@/actions/post-product";
import React from "react";
import { useFormStatus } from "react-dom";

function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
}

const AdicionarPage = () => {
  return (
    <main>
      <h1>Adicionar Produto</h1>
      <form action={addProduct}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />
        <label htmlFor="preco">Preço</label>
        <input type="number" id="preco" name="preco" />
        <label htmlFor="description">Descrição</label>
        <input type="text" id="descricao" name="descricao" />
        <label htmlFor="estoque">Estoque</label>
        <input type="number" id="estoque" name="estoque" />
        <label htmlFor="importado">
          <input type="checkbox" name="importado" id="importado" />
          Importado
        </label>
        <Button />
      </form>
    </main>
  );
};

export default AdicionarPage;
