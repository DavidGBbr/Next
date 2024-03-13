import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Página sobre",
};
const Width = dynamic(() => import("@/components/width"), { ssr: false });

const SobrePage = () => {
  return (
    <main>
      <h2>Sobre</h2>
      <Width />
    </main>
  );
};

export default SobrePage;
