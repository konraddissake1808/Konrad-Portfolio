import type { Metadata } from "next";
import { Kufam, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import SideNav from "./components/sideNav/sideNav";

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
        className={`${kufam.variable} ${inter.variable} h-screen antialiased`}
      >
        <div  className="h-[9%] flex items-center">
          <Header></Header>
        </div>
        <div className="h-[91%]">
          <main className="h-[90%]">
            {children}
          </main>
          <div className="h-[10%] flex justify-center items-center">
            <SideNav></SideNav>
          </div>
        </div>
      </body>
    </html>
  );
}
