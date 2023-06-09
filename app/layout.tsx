import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { FC, ReactNode } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="relative h-screen w-full bg-[url(/assets/BG-TEMP.jpg)] bg-center bg-fixed bg-cover">
          <div
            className={`flex flex-col absolute top-0 left-0 bottom-0 right-0 backdrop-blur-xl bg-black/30 ${inter.className} overflow-auto`}
          >
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
