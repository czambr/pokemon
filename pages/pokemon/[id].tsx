import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Pokemon } from '../../interfaces';
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { Button, Card, Grid, Text, Container, Image } from '@nextui-org/react';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout title={'Algun Pokemon'}>
            <Grid.Container
                css={{ marginTop: '5px' }}
                gap={2}
            >
                <Grid
                    xs={12}
                    sm={4}
                >
                    <Card
                        hoverable
                        css={{ padding: '30px' }}
                    >
                        <Card.Body>
                            <Card.Image
                                src={
                                    pokemon.sprites.other?.dream_world.front_default ||
                                    '/no-image.png'
                                }
                                alt={pokemon.name}
                                width={'100%'}
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid
                    xs={12}
                    sm={8}
                >
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text
                                h1
                                transform='capitalize'
                            >
                                {pokemon.name}
                            </Text>

                            <Button
                                color='gradient'
                                ghost
                            >
                                Guardar en favoritos
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container
                                direction='row'
                                display='flex'
                            >
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
};

// =========================================================
// Se pregeneran las paginas segun los paths permitidos
// en este caso, es segun el id
export const getStaticPaths: GetStaticPaths = async ctx => {
    const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);
    return {
        /* paths: [
            {
                params: { id: '1' },
            },
            {
                params: { id: '2' },
            },
        ], */
        paths: pokemon151.map(id => ({
            params: { id },
        })),
        fallback: false,
    };
};

// =========================================================
// Se pasan los recursos necesarios para una pagina estatica
// en forma de props
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data,
        },
    };
};

export default PokemonPage;