import { Box, Wrap, WrapItem, Badge } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <Box as="dl">
      <DefinitionItem term="Platforms">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        <Wrap>
          {game.genres.map((genre) => (
            <WrapItem key={genre.id}>
              <Badge colorScheme="green">{genre.name}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers && game.publishers.length > 0 ? (
          <Wrap>
            {game.publishers.map((publisher) => (
              <WrapItem key={publisher.id}>
                <Badge colorScheme="purple">{publisher.name}</Badge>
              </WrapItem>
            ))}
          </Wrap>
        ) : (
          "N/A"
        )}
      </DefinitionItem>
    </Box>
  );
}

export default GameAttributes;
