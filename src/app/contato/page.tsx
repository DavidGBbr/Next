import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contato",
  description: "Página contato",
};

const ContatoPage = () => {
  return (
    <main>
      <h2>Contato</h2>
      <h2 style={{ margin: "1600px 0" }} id="contato">
        Entre em contato conosco
      </h2>
    </main>
  );
};

export default ContatoPage;
