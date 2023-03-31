// unocss.config.ts
import { defineConfig } from "@unocss/webpack";
import presetUno from "@unocss/preset-uno";
import type { Theme } from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetTheme from "unocss-preset-theme";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { rules, shortcuts } from "./uno-rules";
import { darkTheme, lightTheme } from "./uno-radix-colors";
export default defineConfig<Theme>({
  include: [/\.(tsx|mdx)($|\?)/],
  rules,
  shortcuts,
  transformers: [transformerVariantGroup()],
  theme: {
    colors: lightTheme.colors,
    breakpoints: {
      xs: "30rem",
      sm: "40rem",
      md: "64rem",
    },
  },

  presets: [
    presetUno({
      dark: { light: ".light", dark: ".dark" },
    }),
    presetIcons({
      scale: 1.2,
    }),
    // @ts-ignore
    presetTheme<Theme>({
      selectors: {
        dark: ".dark",
        light: ".light",
      },
      prefix: "--rdx",
      theme: {
        // light: lightTheme,
        dark: {
          colors: darkTheme.colors,
        },
      },
    }),
  ],
});
