import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box borderRadius={10} overflow="hidden" boxShadow="md">
      {children}
    </Box>
  );
}

export default GameCardContainer;
