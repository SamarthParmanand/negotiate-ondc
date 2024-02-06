import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Provider } from "./provider";
import IsAuthorized from "./auth/components/IsAuthorized";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IsAuthorized />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
