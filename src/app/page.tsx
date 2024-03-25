"use client";

import { getCookie } from "@/actions/get-cookie";
import { setCookie } from "@/actions/set-cookie";
import Cookie from "@/components/cookie";
import Login from "@/components/login";
import { useState } from "react";

export default function HomePage() {
  const [value, setValue] = useState("");

  async function handleSetCookie() {
    const response = await setCookie("segredo", "123456");
    setValue(response.value);
  }

  return (
    <main>
      <h1>Home: {value}</h1>
      <button onClick={handleSetCookie}>Definir Cookie</button>
      <Cookie />
      <Login />
    </main>
  );
}
