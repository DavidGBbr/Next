import Width from "@/components/width";
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
      <Width />
    </main>
  );
};

export default SobrePage;
