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

const contact = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Container maxWidth="1200px" minHeight="1600px">
        <Heading
          textShadow={
            colorMode === "dark" ? "0 0 3px white" : "0 0 3px #6ee5f8"
          }
          paddingTop="100px"
          fontFamily="JetBrains Mono"
        >
          contact.
        </Heading>
      </Container>
    </motion.div>
  );
};

export default contact;
