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

const about = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Container maxWidth="1200px">
      <Heading
        paddingTop="120px"
        textShadow={colorMode === "dark" ? "0 0 3px white" : "0 0 3px #4d0012"}
      >
        about.
      </Heading>
    </Container>
  );
};

export default about;
