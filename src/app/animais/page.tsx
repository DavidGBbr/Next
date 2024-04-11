import Image from "next/image";
import React from "react";
import styles from "./animais.module.css";

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
      <Image
        src="/images/golden-retriever.png"
        width={6720}
        height={4480}
        alt="Golden Retriever"
        sizes="100vw"
        priority
      />
      <Image
        src="/images/labrador.png"
        width={6000}
        height={4000}
        alt="Labrador"
        sizes="100vw"
        priority
      />
      <h1>Animais</h1>
      <ul className={styles.animais}>
        {animais.map((animal, i) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              src={animal.imagem}
              width={2400}
              height={1600}
              alt={animal.descricao}
              quality={75}
              sizes="(max-width: 600px)100vw, 50vw"
              priority={i < 2} //prioridade de carregamento para as 2 primeiras imagens
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default AnimaisPage;
