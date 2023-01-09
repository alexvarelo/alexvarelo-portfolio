import Head from "next/head"
import NavBar from '../navbar.js'
import { Box, Container } from "@chakra-ui/react"
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Alejandro Varela - Homepage</title>
            </Head>
            <Container maxW="100%">
            <NavBar path={router.asPath} />
                {/* <NoSsr>
                    <VoxelDog />
                </NoSsr> */}
            </Container>
            {children}
            <Footer />
        </Box>
    )
}

export default Main;