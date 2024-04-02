"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Menu = () => {
  const params = useParams();
  const pathname = usePathname();
  useEffect(() => {
    console.log("Rota mudou");
  }, [pathname]);
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/acoes">Ações: {params.acao}</Link>
      </li>
    </ul>
  );
};

export default Menu;
