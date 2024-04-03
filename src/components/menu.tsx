"use client";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { Suspense, useEffect } from "react";

function Busca() {
  const searchParams = useSearchParams();
  const busca = searchParams.get("busca");
  return <div>Busca: {busca}</div>;
}

const Menu = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log("Rota mudou");
    // setInterval(() => {
    //   router.refresh();
    // }, 5000);
  }, [router]);
  return (
    <>
      <Suspense>
        <Busca />
      </Suspense>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/acoes/?busca=xpt">Ações: {params.acao}</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
