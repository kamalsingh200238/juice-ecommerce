import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { deskTool } from "sanity/desk";
import product from "./schemas/product";

export default defineConfig({
  basePath: "/admin",
  projectId: "tf7pn90e",
  dataset: "production",
  title: "Juice Ecommerce",
  plugins: [deskTool(),
    unsplashImageAsset(),
    visionTool(),
  ],
  schema: {
    types: [product],
  },
});
