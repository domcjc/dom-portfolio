import { Button, textDecoration } from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "@chakra-ui/react";

interface Props {
  navitem: string;
}

const NavButton = ({ navitem }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Button
      bg="none"
      fontFamily="JetBrains Mono"
      _hover={{
        bg: "none",
        textDecoration: "underline",
      }}
      _focus={{
        color: colorMode === "dark" ? "#9ae6b4" : "#f95278",
      }}
    >
      {navitem}
    </Button>
  );
};

export default NavButton;
