import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const myFont = localFont({ src: "/fonts/MadeTommy.otf" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
