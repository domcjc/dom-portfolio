import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig= {
    initialColorMode: 'dark'
};

const theme = extendTheme({ config, fonts:{
    heading: `'JetBrains Mono Medium', sans-serif`,
    body: `'JetBrains Mono Regular', sans-serif`,

} 
});

export default theme;