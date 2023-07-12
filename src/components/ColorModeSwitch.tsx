import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent="right" paddingTop="40px" paddingRight="20px">
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
