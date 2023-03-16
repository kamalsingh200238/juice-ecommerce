import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
  basePath: "/admin",
  projectId: "tf7pn90e",
  dataset: "production",
  title: "Juice Ecommerce",
  plugins: [deskTool()]
});

