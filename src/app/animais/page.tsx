import Image from "next/image";
import React from "react";

type Animal = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

const AnimaisPage = async () => {
  const response = await fetch("https://api.origamid.online/animais", {
    cache: "no-store",
  });
  const animais = (await response.json()) as Animal[];
  return (
    <main>
      <h1>Animais</h1>
      <ul>
        {animais.map((animal) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              src={animal.imagem}
              width={2400}
              height={1600}
              alt={animal.descricao}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default AnimaisPage;
