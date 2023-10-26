import "./globals.css";
import type { Metadata } from "next";
import { Inter, Orbitron, Montserrat, Roboto } from "next/font/google";
import { TrpcProvider } from "./_trpc/Trpcprovider";
import Navbar from "@/app/_components/navbar/page";
import NextAuthWrapper from "./_nextauth/nextauthwrapper";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--font-orbitron" });
const montserrat = Montserrat({ weight: ["200", "300", "400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--font-montserrat" });
const roboto = Roboto({ weight: ["100", "300", "400", "500", "700"], subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${montserrat.variable} ${roboto.variable}`}>
      <body className={inter.className}>
        <div>
          <NextAuthWrapper>
            <TrpcProvider>
              <Navbar />
              {children}
            </TrpcProvider>
          </NextAuthWrapper>
        </div>
      </body>
    </html>
  );
}
