import React from "react";
import { Inter } from "@next/font/google";

interface ILayoutsProp {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "900", "600"],
  display: "swap",
});

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layouts({ children }: ILayoutsProp) {
  return (
    <div className={inter.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
