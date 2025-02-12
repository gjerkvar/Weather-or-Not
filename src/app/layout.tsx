"use client";

import type { Metadata } from "next";
import "./globals.css";
import { useEffect } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(
        (registration) => {
          console.log("✅ Service Worker registered with scope:", registration.scope);
        },
        (error) => {
          console.error("❌ Service Worker registration failed:", error);
        }
      );
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
        {children}
      </body>
    </html>
  );
}
