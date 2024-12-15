import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/static";

export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  output: "static",
  adapter: netlify()
});