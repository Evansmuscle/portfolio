"use client";

import "./globals.css";
import { Urbanist, Turret_Road } from "next/font/google";
import { Canvas } from "@react-three/fiber";

import { Contact, Copyright, Hamburger, Logo } from "./components";

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const turretRoad = Turret_Road({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linkMap: Array<[string, string]> = [
    ["home", "/home"],
    ["work", "/work"],
    ["about", "/about-me"],
    ["contact", "/contact"],
  ];

  return (
    <html lang="en" title="Kaan Korkmaz Portfolio Website">
      <body className={turretRoad.className}>
        <main className="flex w-screen h-screen bg-[url('/background.png')] bg-cover bg-white bg-center bg-no-repeat justify-center">
          <Logo />
          <Contact />
          <Copyright />
          <Hamburger linkMap={linkMap} />
          <div className="w-4/5 h-5/6 bg-black self-center rounded-3xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
