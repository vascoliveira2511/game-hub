import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  term: string;
  children: React.ReactNode | React.ReactNode[];
}

function DefinitionItem({ term, children }: Props) {
  return (
    <Box marginY={5}>
      <Heading
        as="dt"
        fontSize={["xl", "2xl"]}
        fontWeight="bold"
        color="gray.500"
      >
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
