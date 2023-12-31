import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
    return (
        <Layout title={'Listado de Pokemons'}>
            <Grid.Container
                gap={2}
                justify='flex-start'
            >
                {pokemons.map(pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                ))}
            </Grid.Container>
        </Layout>
    );
};

// =========================================================
// Se pasan los recursos necesarios para una pagina estatica
// en forma de props
export const getStaticProps: GetStaticProps = async ctx => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
        ...poke,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
        }.svg`,
    }));

    return {
        props: {
            pokemons,
        },
    };
};

export default HomePage;
