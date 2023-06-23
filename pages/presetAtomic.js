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
  Icon,
} from "@chakra-ui/react";
import Section from "../components/section.js";
import BlurImage from "../components/BlurImage";
import { IoResize } from "react-icons/io5";
import { TbResize } from "react-icons/tb";

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
      <Container maxW={["100%", "90%"]} mt="20">
        <SimpleGrid columns={[1, 1, 3]} alignItems="center" gap={12}>
          <GridItem colSpan={1} ml={30} alignItems="center">
            <Heading fontSize={[30, 20, 25, 30, 33, 35]} as="h2" variant="page-title">
              {title}
            </Heading>
            <Text pt={1} ml="1" as="i">
              {subtitle}
            </Text>
            <br />
            <Badge>{tag}</Badge>
            <Text mt={5} fontSize={[13, 20, 10, 10, 13, 15]}>
              {description}
            </Text>
          </GridItem>
          <GridItem
            colSpan={2}
            h={[300, 300, 400, 400, 400, 400, 400]}
            position={"relative"}
          >
            <BlurImage img={landing} originalSize={false} />
          </GridItem>
        </SimpleGrid>
        <Section delay={0.3}>
          <Button
            fontSize={20}
            ml="5"
            leftIcon={<Icon as={originalSize ? TbResize : IoResize} />}
            mt={4}
            onClick={() => setOriginalSize(!originalSize)}
          >
            {originalSize ? "Adapted size" : "Original size"}
          </Button>
          <SimpleGrid
            mt={"40px"}
            spacingX="20px"
            spacingY="20px"
            /* minChildWidth={["150px", "200px", "300px", "400px", "500px"]} */
            columns={{ base: 1, md: 2, md: 3 }}
          >
            {srcImages?.map((image) => (
              <GridItem
                key={image}
                position={"relative"}
                h={"700px"}
              >
                <BlurImage img={image} originalSize={originalSize} />
              </GridItem>
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
}

export default AtomicSection;
