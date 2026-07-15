import { Fraunces, Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const bugaki = localFont({
  src: "../fonts/BugakiRegular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-bugaki",
  display: "swap",
});
