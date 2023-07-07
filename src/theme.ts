import { extendTheme, ThemeConfig, Text} from "@chakra-ui/react";
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';
import { cardAnatomy } from '@chakra-ui/anatomy'

const config: ThemeConfig= {
    initialColorMode: 'dark',
};
//Extend Themes

const styles = {
    global: (values: Record<string, any> | StyleFunctionProps) => ({
      body: {
        bgGradient: mode("linear(to-r, #D3FFD7, #F2FFF3, #D3FFD7)","linear(to-l, #151533, #2E27B2, #1a202c)")(values),

      },
    }),
  };

const theme = extendTheme({ config, fonts:{
    heading: `'JetBrains Mono Medium', sans-serif`,
    Text: `'JetBrains Mono Medium', sans-serif`
    },
    styles
    
});

export default theme;