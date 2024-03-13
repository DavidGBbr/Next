"use client";
import React, { useEffect, useState } from "react";

const Width = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <h1 style={{ color: ativo ? "#680" : "#b00" }}>
        Largura da tela: {width}
      </h1>
      <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
    </main>
  );
};

export default Width;
