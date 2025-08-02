import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "The best Youtube downloader",
  description: "The best Youtube downloader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
