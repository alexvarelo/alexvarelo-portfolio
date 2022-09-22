import { Button, Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, Icon } from "@chakra-ui/react"
import Section from '../components/section.js'
import Paragraph from "../components/paragraph.js"
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from "../components/bio.js"
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
} from 'react-icons/io5'
import dynamic from "next/dynamic"
import GradientText from "../components/gradient.js"
import styled from '@emotion/styled'
import { Biography } from "../components/content/biography.js"

const WorldMap = dynamic(import('react-svg-worldmap'), { ssr: false })

const data = [
    { country: "es", value: "He vivido" },
    { country: "it", value: "a" },
    { country: "be", value: "aa" },
    { country: "cz", value: "a" },
    { country: "po", value: "a" },
    { country: "ch", value: "a" },
    { country: "hu", value: "a" },
    { country: "fr", value: "a" },
    { country: "gb", value: "a" },
]


const LogoBox = styled.span`
  font-size: 35px;
  display: inline-flex;
  transition: 300ms ease;
  &:hover {
    transform: rotate(15deg);
  }
`


const Page = () => {
    const yearsBiography=["2016","2017","2018","2019","2020", "2021","2022"];
    return (
        <Layout>
            <Container maxW="750px">
                <Box borderRadius="lg" bg={useColorModeValue('#F9F9F9', 'whiteAlpha.200')} p={1} mb={6} align="center">
                    {/*  Hi 👋🏼, I&apos;m a <GradientText>full-stack developer </GradientText> based in Spain! */}
                    <Image
                        src={useColorModeValue("/logos/logos_blac.png", "/logos/logos_white.png")}
                        alt="companies"
                        boxSize={"75%"} />
                </Box>
                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Welcome <LogoBox>👋🏼</LogoBox> <br /> I&apos;m Alejandro Varela!
                        </Heading>
                        <p><GradientText>Software developer</GradientText> (Front end / Data Scientist / Photographer)</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={1} align="center">
                        <Image
                            borderStyle="solid"
                            maxWidth="120px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/alex.jpg"
                            alt="profile image" />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Box mr={3} mt={7}>
                        <Paragraph>Data Scientist who has open his barriers of knowledge to the field of front.
                            Currently I&apos;m performing in a front-end project learning important skills,
                            while strengthen and expanding my knowledge in machine learning by realizing the
                            professional machine learning course of Google, using Google Cloud Platform.</Paragraph>
                    </Box>
                    {/* <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>} colorScheme="cyan">My portofolio</Button>
                        </NextLink>
                    </Box> */}
                </Section>

                <Section delay={0.2}>
                    <Heading mt={12} as="h3" variant="section-title">Biography 📅</Heading>

                    {yearsBiography.map((value, index) => (
                        <BioSection key={index}>
                            <BioYear>{value}</BioYear>
                            <br /> 
                            {Biography['year'+value]}
                        </BioSection>
                    ))}
                </Section>

                {/* <Section delay={0.3}>
                    <Heading mt={12} as="h3" variant="section-title">I ♡</Heading>
                    <Paragraph>
                        <Link href="/photography">Photography</Link>
                        , Music, Playing guitar, sport, organization, family, Padel
                    </Paragraph>
                </Section> */}

                <Section delay={0.3}>
                    <Heading mt={12} as="h3" variant="section-title">
                        Social media #️⃣
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/alexvarelo" target="_blank">
                                <Button variant="ghost" colorScheme="gray" leftIcon={<Icon as={IoLogoGithub} />}>@alexvarelo</Button>
                            </Link>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Link href="https://www.instagram.com/alexvarelo.raw/" target="_blank">
                                <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoInstagram} />}>@alexvarelo.raw</Button>
                            </Link>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Link href="https://twitter.com/Alexvarelo" target="_blank">
                                <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoTwitter} />}>@alexvarelo</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
                <Section delay={0.3}>
                    <Heading mt={12} as="h3" variant="section-title">
                        Alex&apos;s places 🌍
                    </Heading>
                    <WorldMap
                        fill="gray"
                        fillOpacity="1"
                        color='#88ccca'
                        strokeOpacity="0.1"
                        tooltipTextColor={useColorModeValue('white', 'black')}
                        tooltipBgColor={useColorModeValue('black', 'white')}
                        valueSuffix="people"
                        size="xl"
                        data={data}
                        borderColor={useColorModeValue('black', 'white')}
                        backgroundColor={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} />
                </Section>
            </Container>
        </Layout>
    )
}
export default Page