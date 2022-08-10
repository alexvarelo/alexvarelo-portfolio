import Head from "next/head"
import NavBar from '../navbar.js'
import NoSsr from "../no-ssr.js"
import { Box, Container } from "@chakra-ui/react"
import VoxelDog from "../voxel-cat.js"

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" comment="width-device-width, initial-scale=1" />
                <title>Alejandro Varela - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {/* <NoSsr>
                    <VoxelDog />
                </NoSsr> */}
            </Container>
            {children}
        </Box>
    )
}

export default Main;