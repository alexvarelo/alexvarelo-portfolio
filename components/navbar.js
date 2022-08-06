import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Image
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = props => {
    const { path } = props;
    console.log(props);
    console.log({ ...props });

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px' }}
            zIndex={1}
            {...props}>
            <Container display='flex'
                p={2} maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space=between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/works" path={path}>Works</LinkItem>
                    <LinkItem href="/posts" path={path}>Posts</LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: "none" }}> </Box>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon></HamburgerIcon>}
                            variant="outline"
                            aria-label="Options" />
                        <MenuList>
                            <NextLink href="/" passHref>
                                <MenuItem as={Link}>
                                    <Image
                                        boxSize='2rem'
                                        borderRadius='full'
                                        src='https://placekitten.com/100/100'
                                        alt='Fluffybuns the destroyer'
                                        mr='12px'
                                    />
                                    About</MenuItem>
                            </NextLink>
                            <NextLink href="/works" passHref>
                                <MenuItem as={Link}>Works</MenuItem>
                            </NextLink>
                            <NextLink href="/posts" passHref>
                                <MenuItem as={Link}>Posts</MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar