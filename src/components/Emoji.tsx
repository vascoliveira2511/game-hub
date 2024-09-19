import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaBullseye, FaMeh, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  const emojiMap: { [key: number]: IconType } = {
    5: FaBullseye,
    4: FaThumbsUp,
    3: FaMeh,
    1: FaThumbsDown,
  };

  if (!rating || !emojiMap[rating]) {
    return null;
  }

  return (
    <>
      {rating && (
        <Icon as={emojiMap[rating]} color={"gray.500"} boxSize={5} radius={5} />
      )}
    </>
  );
}

export default Emoji;
