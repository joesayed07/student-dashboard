import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/context/SidebarContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gradely",
  description: "Track. Plan. Graduate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
    >
      <body className="h-screen overflow-hidden flex p-2 gap-4 bg-bg-primary text-slate-100">
        <SidebarProvider>
          <SideBar />
          <div className="w-full flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1">{children}</div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
