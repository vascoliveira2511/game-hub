import { HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
  maxVisibleIcons?: number;
}

const iconMap: { [key: string]: { icon: IconType; name: string } } = {
  pc: { icon: FaWindows, name: "PC" },
  playstation: { icon: FaPlaystation, name: "PlayStation" },
  xbox: { icon: FaXbox, name: "Xbox" },
  nintendo: { icon: BsNintendoSwitch, name: "Nintendo" },
  mac: { icon: FaApple, name: "Mac" },
  linux: { icon: FaLinux, name: "Linux" },
  ios: { icon: MdPhoneIphone, name: "iOS" },
  android: { icon: FaAndroid, name: "Android" },
  web: { icon: BsGlobe, name: "Web" },
};

const orderedPlatformSlugs = [
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

const PlatformIconList = ({ platforms, maxVisibleIcons }: Props) => {
  // Map the platforms to include icon and name from iconMap
  const platformData = platforms
    .filter((platform) => iconMap[platform.slug])
    .map((platform) => ({
      id: platform.id,
      slug: platform.slug,
      name: iconMap[platform.slug].name,
      icon: iconMap[platform.slug].icon,
    }));

  // Sort the platforms according to the desired order
  const sortedPlatforms = orderedPlatformSlugs
    .map((slug) => platformData.find((platform) => platform.slug === slug))
    .filter((platform) => platform !== undefined) as {
    id: number;
    slug: string;
    name: string;
    icon: IconType;
  }[];

  // Adjusted logic to handle undefined maxVisibleIcons
  const visiblePlatforms = maxVisibleIcons
    ? sortedPlatforms.slice(0, maxVisibleIcons)
    : sortedPlatforms;
  const hiddenPlatforms = maxVisibleIcons
    ? sortedPlatforms.slice(maxVisibleIcons)
    : [];

  return (
    <HStack spacing={2}>
      {visiblePlatforms.map((platform) => (
        <Tooltip key={platform.id} label={platform.name}>
          <span>
            <Icon as={platform.icon} color="gray.500" boxSize={5} />
          </span>
        </Tooltip>
      ))}
      {hiddenPlatforms.length > 0 && (
        <Tooltip
          label={hiddenPlatforms.map((p) => p.name).join(", ")}
          aria-label="Hidden platforms"
        >
          <Text fontSize="sm" color="gray.500" cursor="pointer">
            +{hiddenPlatforms.length}
          </Text>
        </Tooltip>
      )}
    </HStack>
  );
};

export default PlatformIconList;
