import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";
import LayoutChrome from "./components/LayoutChrome";
import Footer from "./components/layouts/Footer";
import ContactSection from "./components/home/ContactSection";

// Font chính cho heading, nav, button — cả bản đứng và italic
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

// Font script trang trí — dùng hạn chế, chỉ cho logo hoặc điểm nhấn viết tay
const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

// Font body cho các đoạn văn dài
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio - Thanh Thuy",
  description: "A minimal portfolio website built with Next.js, Tailwind CSS, and Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cormorant.variable} ${pinyonScript.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <LayoutChrome>{children}</LayoutChrome>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}