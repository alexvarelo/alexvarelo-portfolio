import Logo from "./logo";
import NextLink from "next/link";
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
  Button,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button.js";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

function Header() {
  return (
    <Header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Logo />
        <HStack as="nav" spacing="5">
          <LinkItem href="/atomic">
            Atomic
          </LinkItem>
        </HStack>
        <HStack>
          <Button>Test</Button>
        </HStack>
      </Flex>
    </Header>
  );
}

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      as="nav"
      className="navbar"
      w="100%"
      /* bg={useColorModeValue('#ffffff40', '#20202380')} */
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW={{ sm: '100%', lg: '70%' }}
        wrap="wrap"
        align="center"
        justify="space=between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"normal"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          {/* <LinkItem href="/works" path={path}>Works</LinkItem>
                    <LinkItem href="/posts" path={path}>Posts</LinkItem> */}
          <LinkItem href="/atomic" path={path}>
            Atomic
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon></HamburgerIcon>}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                {/* <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink> */}
                <NextLink href="/atomic" passHref>
                  <MenuItem as={Link}>Atomic</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
