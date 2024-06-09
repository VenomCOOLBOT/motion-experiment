import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Logo from "../../public/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Bridal Assistant | Wedding Planner | Tanory Valdez",
  description: "This is a description of my app.",
};

const navLinks = [
  { href: "/", text: "Incio" },
  { href: "/acerca-de-mi", text: "Acerca De Mi" },
  { href: "/colaboracion", text: "Colaboracion" },
  { href: "/servicios", text: "Servicios" },
  { href: "/galeria", text: "Galeria" },
  { href: "/contacto", text: "Contacto" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navLinks={navLinks} image={Logo.src} />
        {children}
      </body>
    </html>
  );
}
