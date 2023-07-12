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
    <Container maxWidth="1200px" minWidth="350px">
      <Grid
        templateAreas={{
          base: `"nav" "main" "content"`,
        }}
      >
        <GridItem
          area="main"
          height="20%"
          paddingTop="110px"
          paddingBottom="100px"
          minWidth="350px"
        >
          <Heading
            fontSize="7xl"
            minWidth="350px"
            textShadow={
              colorMode === "dark" ? "0 0 5px white" : "0 0 5px #4d0012"
            }
          >
            Dom Coleman.
          </Heading>
          <br></br>
          <Text fontFamily="JetBrains Mono" marginRight="10px">
            {" "}
            Hi, I'm Dom.
          </Text>
          <br></br>
          <Text fontFamily="JetBrains Mono" marginRight="10px">
            {" "}
            I am a web developer with a keen interest in frontend and UI/UX. I
            Graduated from the University of Auckland with a BSc in Computer
            Science and am an avid enthusiast in all pertaining to
            web-development.
          </Text>
        </GridItem>
        <GridItem area="content" height="100%" minWidth="350px">
          <ProjectGrid />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default home;
