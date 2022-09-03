import { Atom } from "../../components/atom"
import Layout from "../../components/layouts/article"
import { Container, Box, Heading, HStack, SimpleGrid} from "@chakra-ui/react"
import Image from 'next/image'

import Landing from '../../public/atomico/cinque/landing.jpg'
import thumbnailAtomico from "../../public/atomico/cinque/thumbnail.jpg"
import cris from "../../public/atomico/cinque/cris.jpg"
import alex from "../../public/atomico/cinque/alex.jpg"
import florencia from "../../public/atomico/cinque/florencia.jpg"

const Cinque = () => {
    return (
        <Layout title="Cinque">
            <Container mt={"20px"} maxW="800px" centerContent={true}>
                <Image src={Landing} alt="prueba" />
            </Container>
            <Container mt="7" maxW="800px" centerContent={true}>
                <SimpleGrid columns={[1, 2, 3]} gap={3} justifyContent="center">
                    <Box>
                        <Image src={cris} width={250} height={380} alt="prueba" />
                    </Box>
                    <Box>
                        <Image src={florencia} width={250} height={380} alt="prueba" />
                    </Box>
                    <Box>
                        <Image src={alex} width={250} height={380} alt="prueba" />
                    </Box>
                </SimpleGrid>
            </Container>
        </Layout >
    )
}

export default Cinque;