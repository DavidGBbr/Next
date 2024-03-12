import React from "react";
import fs from "fs/promises";

const Acesso = async () => {
  await fs.appendFile("acesso.txt", `${Date.now()} `, "utf8");
  const data = await fs.readFile("acesso.txt", "utf8");
  return <div>{data}</div>;
};

export default Acesso;
