import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre#empresa">Sobre</Link>
      </li>
      <li>
        <Link href="/contato#contato" scroll={false}>
          Contato
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
