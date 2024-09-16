import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge fontSize={"sm"} paddingX={2} borderRadius={10} colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
