import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Página sobre",
};

const SobrePage = () => {
  return (
    <main>
      <h2>Sobre</h2>
      <h2 style={{ margin: "1600px 0" }} id="empresa">
        A Empresa
      </h2>
    </main>
  );
};

export default SobrePage;
