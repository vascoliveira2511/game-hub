import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color =
    score > 90
      ? "green"
      : score > 75
      ? "yellow"
      : score > 50
      ? "orange"
      : score > 30
      ? "red"
      : "gray";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
