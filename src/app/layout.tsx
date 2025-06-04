import "@/styles/globals.css";
import { Navbar } from "./components/Navbar";
import type { Metadata } from "next";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
