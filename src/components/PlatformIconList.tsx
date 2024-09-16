import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    nintendo: BsNintendoSwitch,
    web: BsGlobe,
    iphone: MdPhoneIphone,
    ipad: MdPhoneIphone,
  };

  return (
    <HStack marginY={2} spacing={2}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color={"gray.500"}
          key={platform.id}
        />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
