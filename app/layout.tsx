"use client";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { usePathname } from "next/navigation";
import "./globals.css";
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const pathList = ["/login", "/sign-up"];
  
  return (
    <html lang="en">
      <body className={`${roboto.className} dark:bg-black dark:text-white`}>
        {pathList.includes(pathName) === false && <Header />}

        {children}
        <Footer />
      </body>
    </html>
  );
}
