import { Card, CardBody, Heading, HStack, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.slug}`} style={{ textDecoration: "none" }}>
      <Card
        as="article"
        height="100%"
        borderRadius="md"
        transition="all 0.2s"
        _hover={{ transform: "translateY(-4px)", shadow: "md", zIndex: 1 }}
        cursor="pointer"
      >
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
            <Heading fontSize="xl" noOfLines={2}>
              {game.name}
            </Heading>
          </Box>

          {/* Bottom Section */}
          <HStack justifyContent="flex-end" marginTop={3}>
            <Emoji rating={game.rating_top} />
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
