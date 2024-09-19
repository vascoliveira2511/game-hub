import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
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
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3} wrap={"wrap"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack>
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            isTruncated
            maxWidth="80%"
            _hover={{ whiteSpace: "normal", overflow: "visible" }}
          >
            {game.name}
          </Heading>
          <Spacer />
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
