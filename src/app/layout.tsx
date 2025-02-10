import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather or Not",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
