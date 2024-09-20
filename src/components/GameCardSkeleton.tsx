import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  HStack,
  Box,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card height="100%">
      <Skeleton height="200px" />
      <CardBody display="flex" flexDirection="column">
        {/* Top Section */}
        <HStack justifyContent="space-between" marginBottom={3}>
          {/* Placeholder for PlatformIconList */}
          <Skeleton height="20px" width="100px" />
          {/* Placeholder for CriticScore */}
          <Skeleton height="20px" width="30px" />
        </HStack>

        {/* Game Name Placeholder */}
        <Box flex="1">
          <SkeletonText noOfLines={2} spacing="4" />
        </Box>

        {/* Bottom Section */}
        <HStack justifyContent="flex-end" marginTop={3}>
          {/* Placeholder for Emoji */}
          <Skeleton height="20px" width="20px" />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
