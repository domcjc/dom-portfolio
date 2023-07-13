import React from "react";
import NavBar from "../components/NavBar";
import { useColorMode } from "@chakra-ui/react";
import ProjectGrid from "../components/ProjectGrid";
import {
  Grid,
  GridItem,
  Show,
  Text,
  Heading,
  Container,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import DisplayGrid from "../components/DisplayGrid";

const projects = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Container maxWidth="1200px" minHeight="1600px">
        <Heading
          paddingTop="120px"
          paddingBottom="20px"
          fontFamily="JetBrains Mono"
          textShadow={
            colorMode === "dark" ? "0 0 3px white" : "0 0 3px #6ee5f8"
          }
        >
          projects.
        </Heading>
        <Text
          fontFamily="JetBrains Mono"
          paddingLeft="5px"
          paddingRight="20px"
          paddingBottom="150px"
        >
          Take a look at some of the projects I have worked on previously. Some
          which that are underway are also included.
        </Text>

        <DisplayGrid />
      </Container>
    </motion.div>
  );
};

export default projects;
