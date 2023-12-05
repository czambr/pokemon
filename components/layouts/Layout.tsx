import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

type Props = {
    title?: string;
    children?: ReactNode;
};

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta
                    name='author'
                    content='Carlos Zambrano'
                />
                <meta
                    name='description'
                    content={`Information about pokemons ${title}`}
                />
                <meta
                    name='keyword'
                    content={`${title}, pokemon, pokedex`}
                />

                <meta
                    property='og:title'
                    content={`Informacion sobre ${title}`}
                />
                <meta
                    property='og:description'
                    content={`Esta es la pagina sobre ${title}`}
                />
                <meta
                    property='og:image'
                    content={`${origin}/img/pokemon_banner.jpeg`}
                />
            </Head>

            <Navbar />

            <main
                style={{
                    padding: '0px 20px',
                }}
            >
                {children}
            </main>
        </>
    );
};
