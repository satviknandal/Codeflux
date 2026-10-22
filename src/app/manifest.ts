import type { MetadataRoute } from "next";
import { SITE_NAME, pages } from "../lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Codeflux Pty Ltd",
    short_name: SITE_NAME,
    description: pages["/"].description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#01182e",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
