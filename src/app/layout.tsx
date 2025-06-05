import "@/styles/globals.css";
import { Navbar } from "./components/Navbar";
import type { Metadata } from "next";
import { GlobalBackground } from "./components/GlobalBackground";
import { Contact } from "./components/Contact";

export const metadata: Metadata = {
  title: "Vincent's Website",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>
        <div className="pt-24 space-y-32 px-4 sm:px-6 lg:px-8"></div>
        <GlobalBackground />
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}
