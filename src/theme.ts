import { extendTheme, ThemeConfig, Text, DarkMode, createMultiStyleConfigHelpers} from "@chakra-ui/react";
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';
import { cardAnatomy } from "@chakra-ui/anatomy";
import { cardTheme } from "./components/cardtheme";

const config: ThemeConfig= {
    initialColorMode: 'dark',
};
//Extend Themes

const styles = {
    global: (values: Record<string, any> | StyleFunctionProps) => ({
      body: {
        bgGradient: mode("linear(to-r,  #89ced9, #C4E0E5, #dbf8fd)",
        "linear(to-r, #0F2027, #203A43, #2C5364)")(values),
        w: '100%'
      },
    }),

  };




const theme = extendTheme({ config, fonts:{
    heading: `'JetBrains Mono Medium', sans-serif`,
    Text: `'JetBrains Mono Medium', sans-serif`
    },
    styles, components: {
      Card: cardTheme,
    },
    
});

export default theme;