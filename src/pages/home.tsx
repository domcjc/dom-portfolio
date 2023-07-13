import { Grid, GridItem, Show, Text, Heading, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "../components/ColorModeSwitch";
import NavBar from "../components/NavBar";
import ProjectGrid from "../components/ProjectGrid";
import { Container } from "@chakra-ui/react";
import Animation from "../components/Animation";
import { Routes, Route } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const home = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.5 },
      }}
    >
      <Container maxWidth="1200px" minHeight="1600px">
        <Grid
          templateAreas={{
            base: ` "main" "content" "footer"`,
          }}
        >
          <GridItem area="main">
            <Heading
              fontSize="7xl"
              paddingTop="120px"
              fontFamily="JetBrains Mono"
              textShadow={
                colorMode === "dark" ? "0 0 4px white" : "0 0 4px #6ee5f8"
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
              web-development. Below are some of my projects:
            </Text>
          </GridItem>
          <GridItem area="content" marginTop="80px">
            <ProjectGrid />
          </GridItem>
          <GridItem area="footer" height="40px"></GridItem>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default home;
