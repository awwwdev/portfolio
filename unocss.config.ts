// unocss.config.ts
import { defineConfig } from "unocss";
import type { UserConfig } from "@unocss/core";
import presetUno from "@unocss/preset-uno";
import type { Theme } from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetTheme from "unocss-preset-theme";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { rules as myRules, shortcuts } from "./uno-rules";
import { darkTheme, lightTheme } from "./uno-radix-colors";
export default defineConfig({
  rules: [...myRules],
  transformers: [transformerVariantGroup()],
  theme: lightTheme,
  presets: [
    presetUno({
      dark: "class",
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
        dark: darkTheme,
      },
    }),
  ],
});
