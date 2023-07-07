import { HStack, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Flex justifyContent="space-between">
      <HStack
        justifyContent="left"
        paddingLeft="65px"
        paddingRight="40px"
        paddingTop="20px"
      >
        <Text fontFamily="JetBrains Mono" paddingRight="40px">
          Projects
        </Text>
        <Text fontFamily="JetBrains Mono" paddingRight="40px">
          About
        </Text>
        <Text fontFamily="JetBrains Mono" paddingRight="40px">
          Contact
        </Text>
      </HStack>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
