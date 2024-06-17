import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: colors.slate[200],
        white: colors.slate[50],
        hoverWhite: colors.slate[200],
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        "inner-top": "inset 0 4px 6px rgba(0, 0, 0, 0.1)",
        "inner-bottom": "inset 0 -4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
