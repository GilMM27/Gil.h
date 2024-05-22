import { NextUIProvider } from "@nextui-org/react";
import Terminal from "./Terminal";
export default function Home() {
  return (
    <NextUIProvider>
      <Terminal />
    </NextUIProvider>
  );
}
