import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    dark: "#14191C",
    white: "#ffff",
    gray: { light: "#C4C4C4", dark: "#767676" },
    green: {
      dark: "#182228",
      light: "#B0FBBC",
      medium: "#1C2C35",
    },
  },
  styles: {
    global: {
      body: { bg: "dark", color: "white" },
    },
  },
  fonts: { body: "Jost" },
});
