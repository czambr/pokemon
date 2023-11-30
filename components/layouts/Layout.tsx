import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

type Props = {
    title?: string;
    children?: ReactNode;
};

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name='author' content='Carlos Zambrano' />
                <meta name='description' content={`Information about pokemons ${title}`} />
                <meta name='keyword' content={`${title}, pokemon, pokedex`} />
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
