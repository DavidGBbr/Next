"use client";

import { setCookie } from "@/actions/set-cookie";
import { useState } from "react";

export default async function HomePage() {
  const [value, setValue] = useState("");
  async function handleClick() {
    const response = await setCookie("segredo", "123456");
    setValue(response.value);
  }

  return (
    <main>
      <h1>Home: {value}</h1>
      <button onClick={handleClick}>Definir Cookie</button>
    </main>
  );
}
