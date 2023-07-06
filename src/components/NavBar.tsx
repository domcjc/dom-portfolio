import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="left" padding="0 15px">
      <Image src={logo} boxSize="60px" />
      <Text>Projects</Text>
      <Text>About</Text>
      <Text>Contact</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
