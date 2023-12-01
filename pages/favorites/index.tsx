import { useEffect, useState } from 'react';
import { Card, Grid } from '@nextui-org/react';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritePages = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, []);

    return (
        <Layout title='Pokemones - Favorites'>
            {favoritePokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <Grid.Container
                    gap={2}
                    direction='row'
                    justify='flex-start'
                >
                    {favoritePokemons.map(id => (
                        <Grid
                            xs={6}
                            sm={2}
                            xl={1}
                            key={id}
                        >
                            <Card
                                hoverable
                                clickable
                                css={{ padding: '10px' }}
                            >
                                <Card.Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                    width={'100px'}
                                    height={140}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid.Container>
            )}
        </Layout>
    );
};

export default FavoritePages;
