import { Box, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  const orderedPlatforms = [
    "pc",
    "playstation",
    "xbox",
    "nintendo",
    "mac",
    "linux",
    "ios",
    "android",
    "web",
  ];

  // Filter and sort the platforms according to the desired order
  const sortedPlatforms = orderedPlatforms
    .filter((slug) => platforms.some((platform) => platform.slug === slug))
    .map((slug) => platforms.find((platform) => platform.slug === slug)!);

  const maxVisibleIcons = 4;
  const visiblePlatforms = sortedPlatforms.slice(0, maxVisibleIcons);
  const hiddenPlatforms = sortedPlatforms.slice(maxVisibleIcons);

  return (
    <Box maxWidth="100%">
      <HStack spacing={2}>
        {visiblePlatforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color={"gray.500"}
          />
        ))}
        {hiddenPlatforms.length > 0 && (
          <Tooltip
            label={hiddenPlatforms.map((platform) => platform.name).join(", ")}
            aria-label="Hidden platforms"
          >
            <Text fontSize="sm" color="gray.500" cursor="pointer">
              +{hiddenPlatforms.length} more
            </Text>
          </Tooltip>
        )}
      </HStack>
    </Box>
  );
};

export default PlatformIconList;
