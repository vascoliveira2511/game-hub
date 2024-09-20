// GameCardContainer.tsx
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      height="100%"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.2s ease-in-out",
      }}
      borderRadius={10}
      overflow="hidden"
      boxShadow="md"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
