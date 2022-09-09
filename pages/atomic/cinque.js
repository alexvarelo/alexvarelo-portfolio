import AtomicSection from "../presetAtomic.js"
import { CinqueContent } from "../../components/content/atomico.js"

import Landing from '../../public/atomico/cinque/landing.jpg'

function importAll(r) {
    return r.keys().map(r);
}

/* 

const listOfImages = importAll(require.context('../../public/atomico/cinque/', false, /\.(png|jpe?g|svg)$/));

{listOfImages.map(
    (image, index) => 
    <Image key={index} src={image} alt="info"></Image>  
)} */


/* const Cinque = () => {
    return (
        <Layout title="Cinque">
            <Container maxW="90%" mt={"20px"}>
                <SimpleGrid columns={[1, 2, 3]} alignItems="center" gap={12}>
                    <GridItem colSpan={1} ml={30} alignItems="center">
                        <Heading fontSize={40} as="h2" variant="page-title">Cinque terre</Heading>
                        <Text pt={1}>Italy, 08/2021</Text>
                        <Badge>@Cristinaa.jpg</Badge>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Image src={Landing} alt="prueba" />
                    </GridItem>
                </SimpleGrid>
                <Section delay={0.3}>
                    <SimpleGrid columns={[1, 2, 2]} mt="100px" alignItems={"center"}>
                        <Container centerContent={true}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </Container>
                        <Container centerContent={true}>
                            <SimpleGrid columns={[1, 4, 4]} gap={2} justifyContent="center">
                                <GridItem colSpan={2}>
                                    <Image src={cris} width={180} height={280} alt="prueba" />
                                </GridItem>
                                <GridItem colSpan={2}>
                                    <Image src={florencia} width={180} height={280} alt="prueba" />
                                </GridItem>
                            </SimpleGrid>
                        </Container>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout >
    )
} */

const Cinque = () => {
    return (
        <AtomicSection
            id={"Cinque"}
            title={CinqueContent.title}
            subtitle={CinqueContent.subtitle}
            description={CinqueContent.subtitle}
            srcImages={importAll(require.context("../../public/atomico/cinque/", false, /\.(png|jpe?g|svg)$/))}
            landing={Landing}
            tag={CinqueContent.tag}>
            {CinqueContent.description1}
        </AtomicSection>
    )
}

export default Cinque;