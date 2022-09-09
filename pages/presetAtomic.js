import Layout from "../components/layouts/article"
import { Container, Heading, HStack, Grid, Text, Badge, SimpleGrid, GridItem } from "@chakra-ui/react"
import Image from 'next/image'
import Section from '../components/section.js'


const AtomicSection = ({ children, id, title, subtitle, tag, description, srcImages, landing }) => {    
    console.log(srcImages);  
    return (
        <Layout title={id}>
            <Container maxW="90%" mt={"20px"}>
                <SimpleGrid columns={[1, 2, 3]} alignItems="center" gap={12}>
                    <GridItem colSpan={1} ml={30} alignItems="center">
                        <Heading fontSize={40} as="h2" variant="page-title">{title}</Heading>
                        <Text pt={1}>{subtitle}</Text>
                        <Badge>{tag}</Badge>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Image src={landing} alt="prueba" />
                    </GridItem>
                </SimpleGrid>
                <Section delay={0.3}>
                    <SimpleGrid columns={[1, 2, 2]} mt="100px" alignItems={"center"}>
                        <Container centerContent={true}>
                            {children}
                        </Container>
                        <Container display="flex" justifyContent="flex-end" p={0}>
                            <SimpleGrid columns={[1, 4, 4]} gap={4}>
                                {srcImages.slice(0,2).map((image, index) => (
                                    <GridItem key={index} colSpan={2}>
                                        <Image placeholder="blur" src={image} key={index} width={180} height={280} alt="index" />
                                    </GridItem>
                                ))}
                            </SimpleGrid>
                        </Container>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout >
    )
}

export default AtomicSection;