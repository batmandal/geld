"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const pageContext = createContext();

export default function RootLayout({ children }) {
  const [page, setPage] = useState(1);
  console.log(page);
  return (
    <pageContext.Provider value={{ page, setPage }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </pageContext.Provider>
  );
}
