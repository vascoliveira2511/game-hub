import {
  HStack,
  Switch,
  useColorMode,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const IconComponent = isDark ? FaSun : FaMoon;

  const iconColor = useColorModeValue("yellow.500", "blue.500");
  const switchColorScheme = useColorModeValue("yellow", "blue");

  return (
    <HStack
      as="button"
      onClick={toggleColorMode}
      spacing={2}
      cursor="pointer"
      aria-label="Toggle color mode"
    >
      <Switch
        colorScheme={switchColorScheme}
        isChecked={isDark}
        pointerEvents="none"
      />
      <Icon as={IconComponent} color={iconColor} boxSize={5} />
    </HStack>
  );
};

export default ColorModeSwitch;
