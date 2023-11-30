import NextLink from 'next/link';
import { useTheme, Text, Spacer, Image, Link } from '@nextui-org/react';

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0px 20px',
                background: theme?.colors.gray900.value,
            }}
        >
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                alt='incono'
                width={70}
                height={70}
            />

            <NextLink
                href='/'
                passHref
            >
                <Link>
                    <Text
                        color='white'
                        h2={true}
                    >
                        P
                    </Text>
                    <Text
                        color='white'
                        h3={true}
                    >
                        okemon
                    </Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink
                href='/favorites'
                passHref
            >
                <Link>
                    <Text
                        color='white'
                        h3={true}
                    >
                        Favoritos
                    </Text>
                </Link>
            </NextLink>
        </div>
    );
};
