import { Roboto, DM_Serif_Display } from "next/font/google";
import localFont from "next/font/local";

export const font_body = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const font_display = DM_Serif_Display({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const font_externa = localFont({
  src: "../fonts/ProtestGuerrilla-Regular.ttf",
  weight: "400",
  variable: "--font-externa",
  display: "swap",
});
