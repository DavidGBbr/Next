"use client";
import React, { useState } from "react";

const Imc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState("");

  const handleCalculate = () => {
    const imc = Number(weight) / (Number(height) * Number(height));
    setHeight(height);
    setWeight(weight);
    setImc(imc.toFixed(2));
  };

  return (
    <>
      <label htmlFor="height">Altura</label>
      <input
        type="text"
        id="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <label htmlFor="weight">Peso</label>
      <input
        type="text"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={handleCalculate}>Calcular</button>
      {imc !== "" && <h2>Resultado: {imc}</h2>}
    </>
  );
};
export default Imc;
