import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eric Obeta",
  description: "Creative Fullstack Developer and UI/UX Designer crafting seamless digital experiences with clean code, thoughtful design, and user-centered solutions. Explore my portfolio of web apps, interfaces, and interactive projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
