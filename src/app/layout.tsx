import type { Metadata } from "next";
import { Inter, Montserrat, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "../../styles/globals.css";

import React from "react";
import { Providers } from "./providers";
import Nav from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart wallet",
  description: "Powered by Base Smart Wallet Integration",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>
        <Providers>
          {/* <Nav /> */}
          {props.children}
          <Toaster position="top-center" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}
