import { useState } from "react";
import Layout from "../components/layouts/article";
import {
  Container,
  Heading,
  Text,
  Badge,
  SimpleGrid,
  GridItem,
  Button,
} from "@chakra-ui/react";
//import {Image as ImageChakra} from "@chakra-ui/react";
import Image from "next/image";
import Section from "../components/section.js";

function AtomicSection({
  id,
  title,
  subtitle,
  tag,
  description,
  srcImages,
  landing,
}) {
  const [originalSize, setOriginalSize] = useState(true);
  return (
    <Layout title={id}>
      <Container maxW="90%" mt={"20px"} pt={28}>
        <SimpleGrid columns={[1, 1, 3]} alignItems="center" gap={12}>
          <GridItem colSpan={1} ml={30} alignItems="center">
            <Heading fontSize={30} as="h2" variant="page-title">
              {title}
            </Heading>
            <Text pt={1}>{subtitle}</Text>
            <Badge>{tag}</Badge>
          </GridItem>
          <GridItem colSpan={2}>
            <Image
              objectFit="scale-down"
              placeholder="blur"
              src={landing}
              alt="prueba"
            />
          </GridItem>
        </SimpleGrid>
        <p>{description}</p>
        <Section delay={0.3}>
          <Button mt={10} onClick={() => setOriginalSize(!originalSize)}>
            {originalSize ? "Adapted size" : "Original size"}
          </Button>
          <SimpleGrid
            columns={[1, 2, 2, 4]}
            mt={"40px"}
            spacingX="20px"
            spacingY="35px"
          >
            {srcImages?.map((image, index) => (
              <GridItem key={image}>
                <Image
                  objectFit={originalSize ? "scale-down" : "cover"}
                  src={image}
                  key={image}
                  blurDataURL="https://bit.ly/placeholder-img"
                  placeholder="blur"
                  /* key={index} */
                  alt={index}
                  height={1000}
                  width={730}
                  loading="lazy"
                />
              </GridItem>
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
}

export default AtomicSection;
