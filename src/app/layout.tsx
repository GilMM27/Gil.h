import "../styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Chakra_Petch } from "next/font/google";
import { HeroUIProvider } from "@heroui/system";
import { TerminalProvider } from "./_components/TerminalContext";

export const metadata: Metadata = {
  title: "Gil.mm - Portfolio",
  description: "Just a developer's portfolio.",
  icons: [{ rel: "icon", url: "/assets/favicon.ico" }],
};

const code = Chakra_Petch({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${code.className} bg-black text-white`}>
        <TRPCReactProvider>
          <HeroUIProvider>
            <TerminalProvider>{children}</TerminalProvider>
          </HeroUIProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
