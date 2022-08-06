import { Button, Container, Box, Heading, Image, useColorModeValue, Link, SimpleGrid, List, ListItem, Icon } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from '../components/section.js'
import Paragraph from "../components/paragraph.js"
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio.js"
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'
import dynamic from "next/dynamic"
import styled from '@emotion/styled'


const WorldMap = dynamic(import('react-svg-worldmap'), { ssr: false })

const data = [
    { country: "cn", value: "1929292" }
]

const GradientText = styled.span`
font-size: 20px;
font-family: -apple-system, BlinkMacSystemFont, sans-serif;
font-weight: 700;
background: linear-gradient(to right, rgb(0,210,255), rgb(58,123, 213));
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
`

const Page = () => {
    return (
        <Layout>
            <Container maxW="750px">
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hi 👋🏼, I&apos;m a <GradientText>full-stack developer </GradientText> based in Spain!
                </Box>
                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Alejandro Varela
                        </Heading>
                        <p><GradientText>Software developer</GradientText> (Front end / Data Scientist / Photographer)</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/alex.jpg"
                            alt="profile image" />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Data Scientist who has open his barriers of knowledge to the field of front.
                        Currently I&apos;m performing in a front-end project learning important skills,
                        while strengthen and expanding my knowledge in machine learning by realizing the
                        professional machine learning course of Google, using Google Cloud Platform.</Paragraph>
                    <NextLink href="/works/inkdrop"><Link>Inkdrop</Link></NextLink>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>} colorScheme="teal">My portofolio</Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">Bio</Heading>
                    <BioSection>
                        <BioYear>1998</BioYear>
                        Born in Galicia, Spain
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2020
                        </BioYear>
                        Finished the Computer Science degree studied in the Universidad Complutense de Madrid
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2020
                        </BioYear>
                        Finished the Erasmus schoolarship in the Politencico di Milano, studing Master subjects being a grade student
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2021
                        </BioYear>
                        Worked for Minsait as a Data Scientist and ended the year learning React, and working as Front-end Developer
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2022 to Present
                        </BioYear>
                        Ended my work in Minsait, and moved forwards to FNZ in Check Republic
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">I ♡</Heading>
                    <Paragraph>
                        <Link href="/photography">Photography</Link>
                        , Music, Playing guitar, sport, organization, family, Padel
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Social media
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="" target="_blank"></Link>
                            <Button variant="ghost" colorScheme="gray" leftIcon={<Icon as={IoLogoGithub} />}>@alexvarelo</Button>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Link href="" target="_blank"></Link>
                            <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoInstagram} />}>@alexvarelo</Button>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Link href="" target="_blank"></Link>
                            <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoTwitter} />}>@alexvarelo</Button>
                        </ListItem>
                    </List>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Places of Alex
                    </Heading>
                    <WorldMap color="blue" valueSuffix="people" size="lg" data={data} />
                </Section>
            </Container>
        </Layout>
    )
}
export default Page