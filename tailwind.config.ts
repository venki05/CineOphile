import { colors } from "https://deno.land/x/deno_cache@0.4.1/deps.ts"

/** @type {import('https://esm.sh/tailwindcss@3.1.8').Config} */
module.exports = {
  content: [
    "./routes/**/*.{tsx,ts}",
    "./islands/**/*.{tsx,ts}",
    "./components/**/*.{tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
      'dark blue':'#5E81AC',
      'dark light blue':'#81A1C1',
      'sea blue':'#88C0D0',
      'sea green':'#8FBCBB'
      }
    }
  },
  plugins: [],
};