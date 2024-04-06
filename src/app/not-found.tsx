import Link from "next/link";
import React from "react";

const NofFound = async () => {
  return (
    <main>
      <h1>Página não encontrada</h1>
      <Link href={"/"}>Volte para a Home</Link>
    </main>
  );
};

export default NofFound;
