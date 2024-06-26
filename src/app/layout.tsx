import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";
import { font_body, font_display, font_externa } from "./fonts";

export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado por Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font_body.className} ${font_body.variable} ${font_display.variable} ${font_externa.variable}`}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
