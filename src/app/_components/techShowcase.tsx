"use client";

import { useState } from "react";
import Image from "next/image";
import { techColors, techs } from "~/lib/techs";

export default function TechShowcase() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const gradientColor = hoveredTech
    ? (techColors[hoveredTech] ?? "#22c55e")
    : "#22c55e";

  return (
    <section
      className="relative flex h-screen items-center overflow-hidden"
      id="Technologies"
    >
      <div
        className="pointer-events-none absolute inset-0 -ml-30 w-screen transition-opacity duration-300"
        style={{
          background: hoveredTech
            ? `linear-gradient(to right, ${gradientColor}40 0%, ${gradientColor}20 30%, transparent 60%)`
            : "transparent",
          opacity: hoveredTech ? 1 : 0,
        }}
      />

      <div className="relative z-10 mx-30 w-full">
        <p
          className="text-8xl transition-colors duration-300"
          style={{ color: hoveredTech ? gradientColor : "#22c55e" }}
        >
          What can I do for you?
        </p>
        <p className="mt-10 w-2/3 text-4xl">
          I&apos;ve worked on a ton of projects with different technologies,
          making me a versatile developer ready for new challenges.
        </p>

        <div className="flex items-center justify-between">
          <div className="flex h-64 w-64 items-center justify-center">
            {hoveredTech && (
              <div className="animate-in fade-in flex flex-col items-center duration-200">
                <Image
                  src={`/assets/techs/${hoveredTech}.png`}
                  alt={hoveredTech}
                  width={500}
                  height={500}
                  className="h-60 w-60 object-contain"
                />
                <span
                  className="mt-4 text-5xl font-semibold capitalize transition-colors duration-200"
                  style={{ color: gradientColor }}
                >
                  {hoveredTech}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-end">
            {techs.map((techGroup, index) => (
              <div key={index} className="mt-5 flex space-x-5 text-3xl">
                {techGroup.map((tech) => (
                  <div
                    key={tech}
                    className="flex cursor-pointer items-center justify-center rounded-xl bg-neutral-900 p-5 transition-all duration-200 hover:scale-110 hover:bg-neutral-800"
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <Image
                      src={`/assets/techs/${tech}.png`}
                      alt={tech}
                      width={50}
                      height={50}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
