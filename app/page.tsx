import { NextUIProvider } from "@nextui-org/react";
import { Chakra_Petch } from "next/font/google";
import Landing from "./components/landing";

const code = Chakra_Petch({
  subsets: ["latin"],
  weight: '400',
})

export default function Home() {
  return (
    <NextUIProvider className={code.className}>
      <Landing />
    </NextUIProvider>
  );
}