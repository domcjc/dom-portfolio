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
        bgGradient: mode("linear(to-r, #FFFFFF, #ffe0e8, #FFFFFF)","linear(to-r, #151533, #2E27B2, #1a202c)")(values),
        

      },
    }),

  };




const theme = extendTheme({ config, fonts:{
    heading: `'JetBrains Mono Medium', sans-serif`,
    Text: `'JetBrains Mono Medium', sans-serif`
    },
    styles,
    colors: {
      gray: 
      {
        50: '#ffe2ec',
        100: '#ffb3c5',
        200: '#fc839f',
        300: '#f95278',
        400: '#f62252',
        500: '#dd0939',
        600: '#ad032c',
        700: '#7c001e',
        800: '#4d0012',
        900: '#200005',
      }

    }, components: {
      Card: cardTheme,
    },
    
});

export default theme;