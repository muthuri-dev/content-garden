import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Garden",
  description: "my beauliful movie garden",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h2 className="bg-red-500 p-4">Hello from the Navbar</h2>
        {children}
      </body>
    </html>
  );
}
