import { Card, CardBody, Heading, HStack, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%">
      {/* Makes the card fill the container */}
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody display="flex" flexDirection="column">
        {/* Top Section */}
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>

        {/* Game Name */}
        <Box flex="1">
          {/* Takes up remaining space */}
          <Heading fontSize="xl" noOfLines={2}>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </Heading>
        </Box>

        {/* Bottom Section */}
        <HStack justifyContent="flex-end" marginTop={3}>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
