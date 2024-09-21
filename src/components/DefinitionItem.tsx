import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  term: string;
  children: React.ReactNode | React.ReactNode[];
}

function DefinitionItem({ term, children }: Props) {
  return (
    <Box as="div" display="grid" gridTemplateColumns="120px 1fr" my={2}>
      <Text as="dt" fontSize="md" fontWeight="semibold" color="gray.500">
        {term}
      </Text>
      <Box as="dd" fontSize="md">
        {children}
      </Box>
    </Box>
  );
}

export default DefinitionItem;
