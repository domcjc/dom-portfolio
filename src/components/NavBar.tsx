import { HStack, Image, Text, Flex, Button } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <Flex justifyContent="space-between">
      <HStack
        justifyContent="left"
        paddingLeft="39px"
        paddingRight="40px"
        paddingTop="40px"
      >
        <Link to="/projects">
          <NavButton navitem="Projects"></NavButton>
        </Link>
        <Link to="/about">
          <NavButton navitem="About"></NavButton>
        </Link>
        <Link to="/contact">
          <NavButton navitem="Contact"></NavButton>
        </Link>
      </HStack>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
