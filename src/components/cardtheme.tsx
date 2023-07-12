import { cardAnatomy } from "@chakra-ui/anatomy";
import { LightMode, createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";
import theme from "../theme";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);
//bgGradient: "linear(to-l, #831BDA, #453DCE)",
const baseStyle = definePartsStyle({
  // define the part you're going to style

  header: {
    paddingBottom: "0px",
  },
  body: {
    paddingTop: "0px",
  },
  footer: {
    paddingTop: "0px",
  },
});

export const cardTheme = defineMultiStyleConfig({ baseStyle });
