"use client";
import { addProduct } from "@/actions/post-product";
import React, { FormEvent, useState } from "react";

const AdicionarPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [imported, setImported] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addProduct({
      nome: name,
      preco: Number(price),
      descricao: description,
      estoque: Number(stock),
      importado: Number(imported) as 0 | 1,
    });

    setName("");
    setPrice("");
    setDescription("");
    setStock("");
    setImported(0);
  };

  const handleImported = () => {
    setImported(imported === 0 ? 1 : 0);
  };

  return (
    <main>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">Preço</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="stock">Estoque</label>
        <input
          type="text"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <label htmlFor="imported">
          <input
            type="checkbox"
            name="imported"
            id="imported"
            value={imported}
            onChange={handleImported}
          />
          Importado
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </main>
  );
};

export default AdicionarPage;
