"use server";

import { Produto } from "@/app/produtos/page";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProduct({
  nome,
  preco,
  descricao,
  estoque,
  importado,
}: Produto) {
  const data = {
    nome,
    preco,
    descricao,
    estoque,
    importado,
  };

  const response = await fetch("https://api.origamid.online/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  console.log(responseData);
  revalidatePath("/produtos");
  redirect("/produtos");
}
