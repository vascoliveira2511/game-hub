import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px" boxShadow="md">
      <Image src={logo} boxSize="60px" objectFit={"cover"} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
