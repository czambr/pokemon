import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

interface Props {
    idPokemon: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ idPokemon }) => {
    const router = useRouter();
    const onFavoriteClick = () => {
        router.push(`/pokemon/${idPokemon}`);
    };

    return (
        <Grid
            xs={6}
            sm={2}
            xl={1}
            onClick={onFavoriteClick}
        >
            <Card
                hoverable
                clickable
                css={{ padding: '10px' }}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`}
                    width={'100px'}
                    height={140}
                />
            </Card>
        </Grid>
    );
};
