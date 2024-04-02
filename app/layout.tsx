import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "todo-test",
  description: "Test app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>

        <main className=''>
          <div className='app flex flex-col overflow-hidden min-h-screen'>
            <div className='flex-grow flex-1'>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
