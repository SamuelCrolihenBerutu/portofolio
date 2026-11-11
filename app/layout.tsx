"use client";

import { useEffect } from "react";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

// Pengecekan tema dilakukan di client-side tanpa tag <script>
function ThemeInit() {
  useEffect(() => {
    try {
      const t = localStorage.getItem("theme");
      if (t !== "light") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${jakarta.variable} ${mono.variable} antialiased`}>
      <head />
      <body className="min-h-screen">
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}