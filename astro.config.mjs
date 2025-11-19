
import { defineConfig,fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
vite:{
   plugins: [tailwindcss()],
   },
build: { format: 'file' },
experimental: {
    fonts: [{
       provider: fontProviders.google(),
       name: "Comic Neue",
       cssVariable: "--font-comic"
    },
       {
          provider: fontProviders.google(),
          name: "Amaranth",
         cssVariable: "--font-Amaranth"
     }
   ]
}
//
});
