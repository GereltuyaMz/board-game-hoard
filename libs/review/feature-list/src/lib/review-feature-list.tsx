import {
  Tile,
  TileGrid,
  ImageWrapper,
  Image,
  TileTitle,
  TileLeftCorner,
  TileRightCorner,
} from '@bghoard/review/ui-tile';
import { useGames } from '@bghoard/review/data-access-games';
import { currencyFormat, ratingFormat } from '@bghoard/review/util-formatters';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
export interface ReviewFeatureListProps {}

export const ReviewFeatureList = (props: ReviewFeatureListProps) => {
  const games = useGames();
  return (
    <TileGrid>
      {games.map((game) => {
        return (
          <Link
            to={'/' + game.id}
            key={game.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Tile>
              {game.image && (
                <ImageWrapper>
                  <Image src={game.image} />
                </ImageWrapper>
              )}
              <TileTitle>{game.name}</TileTitle>
              <TileLeftCorner>
                {ratingFormat(game.rating as number, 5)}
              </TileLeftCorner>
              <TileRightCorner>{currencyFormat(game.price)}</TileRightCorner>
            </Tile>
          </Link>
        );
      })}
    </TileGrid>
  );
};
