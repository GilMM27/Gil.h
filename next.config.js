/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if applicable, but HTTPS is recommended
        hostname: "**", // Allows any hostname
      },
    ],
  },
};

export default config;
