import type { Metadata } from "next";
import { Kufam, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header";
import SideNav from "../components/sideNav/sideNav";
import Footer from "../components/footer/footer";
import { Suspense } from "react";
import CursorGlow from "@/components/cursorGlow/cursorGlow";
import type { Viewport } from "next";

const kufam = Kufam({
  variable: "--font-kufam",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Konrad Dissake",
  description: "Konrad Dissake, Fullstack Web developer personal portfolio website",
};

export const viewPort: Viewport = {
  colorScheme: "dark light"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body"
        className={`${kufam.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans relative h-screen w-full antialiased flex flex-col justify-between overflow-x-hidden`}
      >
        <CursorGlow></CursorGlow>
        <div className="@container relative">
          <div className="sticky z-40 top-0">
            <div className="relative h-[10vh] z-30 flex items-center">
              <Suspense fallback={<div>Loading...</div>}>
                <Header></Header>
              </Suspense>
            </div>
          </div>
          <div className="@6xl:w-full @6xl:flex @6xl:flex-row-reverse @6xl:justify-end">
            <main className="min-h-[80vh] @6xl:w-full @6xl:min-h-[90vh]">
              {children}
            </main>
            <div className="h-[10vh] flex justify-center items-center w-full z-100 sticky bottom-0 @5xl:overflow-hidden @6xl:h-[80vh] @6xl:w-20 @6xl:sticky @6xl:top-18 @6xl:items-end @6xl:mb-18 @6xl:z-30">
              <SideNav></SideNav>
            </div>
          </div>
          <div className="">
            <Footer></Footer>
          </div>
        </div>
      </body>
    </html>
  );
}
