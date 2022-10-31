import "/styles/globals.css";
import Navbar from "./Navbar";

import { Inter } from "@next/font/google";

const inter = Inter();

export default function Layout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head></head>
      <body className="relative bg-black h-full w-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
