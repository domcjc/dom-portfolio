import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent="right" paddingTop="20px" paddingRight="40px">
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text fontFamily="JetBrains Mono"> Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
