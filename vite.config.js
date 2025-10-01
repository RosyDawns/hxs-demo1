import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    rollupOptions: {
      external: [
        /^\/img-.*\.jpg$/,
        /^\/img_.*\.(jpg|jpeg)$/,
        /^\/img_.*\.png$/,
        /^\/img_.*\.jpeg$/,
      ],
    },
  },
});
