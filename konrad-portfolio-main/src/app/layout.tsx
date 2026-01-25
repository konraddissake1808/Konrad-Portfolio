import type { Metadata } from "next";
import { Kufam, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header";
import SideNav from "../components/sideNav/sideNav";
import { Suspense } from "react";

const kufam = Kufam({
  variable: "--font-kufam",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konrad Dissake",
  description: "Konrad Dissake, Fullstack Web developer personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body"
        className={`${kufam.variable} ${inter.variable} relative h-screen antialiased`}
      >
        
        <div className="relative">
          <div className="sticky z-40 top-0">
            <div className="relative h-[10vh] flex items-center">
              <Suspense fallback={<div>Loading...</div>}>
                <Header></Header>
              </Suspense>
            </div>
          </div>
          <main className="">
            {children}
          </main>
          <div className="h-[10vh] flex justify-center items-center bottom-0 w-full sticky">
            <SideNav></SideNav>
          </div>
        </div>
      </body>
    </html>
  );
}
