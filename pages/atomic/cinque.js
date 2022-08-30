import { Atom } from "../../components/atom"
import Layout from "../../components/layouts/article"
import { Container, Box, Heading } from "@chakra-ui/react"
import Image from 'next/image'

import Landing from '../../public/atomico/cinque/landing.jpg'

const Cinque = () => {
    return (
        <Layout title="Cinque">
            <Container maxW="800px" height="400px" bg="black">
                <div variant="atomic-landing">
                    <Heading as="h4" fontSize={20} color="white">
                        Cinque terre (Landing)
                    </Heading>
                </div>
            </Container>
        </Layout>
    )
}

export default Cinque;