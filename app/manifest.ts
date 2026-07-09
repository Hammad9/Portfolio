import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Hammad",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/images/placeholder.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
