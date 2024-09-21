import { useParams } from "react-router-dom";
import {
  Heading,
  Spinner,
  Grid,
  GridItem,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";

import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return (
      <Box mt={10} textAlign="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error" mt={10}>
        <AlertIcon />
        There was an error fetching the game details.
      </Alert>
    );
  }

  if (!game) {
    return (
      <Alert status="warning" mt={10}>
        <AlertIcon />
        Game not found.
      </Alert>
    );
  }

  const { name, description_raw, id, background_image } = game;

  return (
    <>
      {/* Content Container */}
      <Box position="relative" zIndex={1} px={{ base: 4, md: 8 }} py={8}>
        {/* Game Title */}
        <Heading mb={6}>{name}</Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr" }}
          gap={8}
          alignItems="start"
        >
          {/* Left Column */}
          <GridItem>
            {/* Game Description */}
            {description_raw && (
              <ExpandableText text={description_raw} maxLength={300} />
            )}

            {/* Game Attributes */}
            <GameAttributes game={game} />
          </GridItem>

          {/* Right Column */}
          <GridItem>
            {/* Game Trailer */}
            <GameTrailer gameId={id} />

            {/* Spacing */}
            <Box height={6} />
          </GridItem>
        </Grid>
        {/* Game Screenshots */}
        <GameScreenShots gameId={id} />
      </Box>
    </>
  );
}

export default GameDetailPage;
