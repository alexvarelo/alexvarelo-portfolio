import { Atom } from "../../components/atom"
import Layout from "../../components/layouts/article"
import { Container, Box } from "@chakra-ui/react"
import Image from 'next/image'

import Landing from '../../public/atomico/cinque/landing.jpg'

const Cinque = () => {
    return (
        <Layout title="Cinque">
            <Container maxW="1000px" mt={7}>
                <div style={{background:"../../public/atomico/cinque/landing.jpg"}}>
                    aa
                </div>

            </Container>
        </Layout>
    )
}

export default Cinque;