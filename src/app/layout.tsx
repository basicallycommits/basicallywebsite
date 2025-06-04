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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
