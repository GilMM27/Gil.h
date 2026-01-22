"use client";

import { MatrixRainingLetters } from "react-mdr";

export default function MatrixEffect() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 h-screen w-full"
      style={{
        maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, transparent 100%)",
      }}
    >
      <MatrixRainingLetters className="h-full w-full" />
    </div>
  );
}
