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

const projects = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Container maxWidth="1200px">
      <Grid
        templateAreas={{
          base: ` "Project1" "Project2" "Project3"`,
        }}
      ></Grid>
      <Heading
        paddingTop="120px"
        paddingBottom="220px"
        textShadow={colorMode === "dark" ? "0 0 3px white" : "0 0 3px #4d0012"}
      >
        projects.
      </Heading>

      <Heading paddingBottom="20px" fontSize="2xl" paddingLeft="20px">
        Project 1
      </Heading>
      <GridItem
        area="Project1"
        bg="white"
        height="600px"
        marginBottom="400px"
        marginLeft="20px"
        marginRight="20px"
      ></GridItem>

      <Heading paddingBottom="20px" fontSize="2xl" paddingLeft="20px">
        Project 2
      </Heading>
      <GridItem
        area="Project2"
        bg="white"
        height="600px"
        marginBottom="400px"
        marginLeft="20px"
        marginRight="20px"
      ></GridItem>

      <Heading paddingBottom="20px" fontSize="2xl" paddingLeft="20px">
        Project 3
      </Heading>
      <GridItem
        area="Project3"
        bg="white"
        height="600px"
        marginBottom="400px"
        marginLeft="20px"
        marginRight="20px"
      ></GridItem>

      <Heading paddingBottom="20px" fontSize="2xl" paddingLeft="20px">
        Project 4
      </Heading>
      <GridItem
        area="Project3"
        bg="white"
        height="600px"
        marginBottom="400px"
        marginLeft="20px"
        marginRight="20px"
      ></GridItem>

      <Grid />
    </Container>
  );
};

export default projects;
