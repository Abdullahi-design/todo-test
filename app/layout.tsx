import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ziype",
  description: "The fastest food delivery service in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className=''>
          <div className='app flex flex-col overflow-hidden min-h-screen'>
            {/* <Nav/> */}
            <div className='flex-grow flex-1'>{children}</div>
            <Footer/>
          </div>
        </main>
      </body>
    </html>
  );
}
