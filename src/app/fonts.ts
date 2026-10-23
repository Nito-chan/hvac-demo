import {
  Archivo_Black,
  Bricolage_Grotesque,
  Fraunces,
  Manrope,
} from "next/font/google";

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const fontClassNames = [
  bricolage.variable,
  fraunces.variable,
  archivo.variable,
  manrope.variable,
].join(" ");
