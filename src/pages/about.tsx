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

const about = () => {
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
          about.
        </Heading>
        <Text
          fontFamily="JetBrains Mono"
          paddingLeft="5px"
          paddingRight="20px"
          paddingBottom="20px"
        >
          Hi, Im Dom.
        </Text>
        <Text fontFamily="JetBrains Mono" paddingLeft="5px" paddingRight="20px">
          Originally from Taranaki, I came to Auckland to study Computer Science
          at the University of Auckland. I Graduated in 2023 and left my studies
          with a interest in web development.
          <br />
          <br />I am keen on front end development, alongside implementating
          UI/UX that proves relevant to the context and setting of a specfic
          application. I also have a keen interest in intergrating cloud
          services, particularly AWS.
          <br />
          <br />
          <br />
          <br />
          Qualifications:
        </Text>
        <ul>
          <li>BSc in Computer Science - Univeristy of Auckland</li>
          <li>AWS Cloud Practitioners License</li>
        </ul>
      </Container>
    </motion.div>
  );
};

export default about;
