import { Grid, GridItem, Show, Text, Heading, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "../components/ColorModeSwitch";
import NavBar from "../components/NavBar";
import ProjectGrid from "../components/ProjectGrid";
import { Container } from "@chakra-ui/react";
import Animation from "../components/Animation";
import { Routes, Route } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const home = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Container maxWidth="1200px" minWidth="590px" overflow="hidden">
      <Grid
        templateAreas={{
          base: ` "main" "content" "footer"`,
        }}
      >
        <GridItem area="main" height="20%">
          <Heading
            fontSize="7xl"
            paddingTop="120px"
            fontFamily="JetBrains Mono"
            textShadow={
              colorMode === "dark" ? "0 0 4px white" : "0 0 4px #4d0012"
            }
          >
            Dom Coleman.
          </Heading>
          <br></br>
          <Text
            fontFamily="JetBrains Mono"
            paddingLeft="5px"
            paddingRight="20px"
          >
            Hi, I'm Dom.
          </Text>
          <br></br>
          <Text
            fontFamily="JetBrains Mono"
            paddingLeft="5px"
            paddingRight="20px"
          >
            I am a web developer with a keen interest in frontend and UI/UX. I
            Graduated from the University of Auckland with a BSc in Computer
            Science and am an avid enthusiast in all pertaining to
            web-development.
          </Text>
        </GridItem>
        <GridItem area="content" marginTop="80px">
          <ProjectGrid />
        </GridItem>
        <GridItem area="footer" height="40px"></GridItem>
      </Grid>
    </Container>
  );
};

export default home;
