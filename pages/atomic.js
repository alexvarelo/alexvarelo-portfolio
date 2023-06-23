import { Container, SimpleGrid, Heading, GridItem } from "@chakra-ui/react";
import Section from "../components/section";
import { AtomicGridItem } from "../components/grid-item";
import P from "../components/paragraph";
import { GradientTextBlue } from "../components/gradient";
import BlurImage from "../components/BlurImage";

import thumbCinque from "../public/atomico/cinque/thumbnailCinque.jpg";
import thumbAsturias from "../public/atomico/asturias/thumbnailAsturias.PNG";
import thumbJournal from "../public/atomico/journal/thumbnailJournal.jpg";
import thumbLanzarote from "../public/atomico/lanzarote/thumbnailLanzarote.JPG";
import { useEffect, useState, useRef } from "react";
import { supabase } from "../lib/supabaseClient.js";

const Atomic = () => {
  const landingImages = useRef();
  const [landingImage, setLandingImage] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLandingImage(landingImages.current[counter].href);
      console.log(landingImage);
      if (counter === landingImages.current.length - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [counter]);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await supabase
        .from("AtomicImages")
        .select()
        .eq("forLandingPage", true);
      landingImages.current = images.data;
      setLandingImage(images.data[0].href);
    };
    if (!landingImages.current) {
      fetchImages();
    }
  }, []);

  if (!landingImages.current) {
    return <></>;
  }
  return (
    <>
      <Container align="center" maxW={["100%", "90%"]} mt="20">
        <SimpleGrid columns={[1, 1, 3]} alignItems="center" gap={10}>
          <GridItem colSpan={1}>
            <Heading as="h1" fontSize={60} fontFamily={"body"}>
              <GradientTextBlue>ATOMIC</GradientTextBlue>
            </Heading>
            <Heading as="h1" fontSize={50} fontFamily={"body"}>
              <GradientTextBlue>TRAVEL</GradientTextBlue>
            </Heading>
            <Heading as="h1" fontSize={40} fontFamily={"body"}>
              <GradientTextBlue>LOVE</GradientTextBlue>
            </Heading>
            <Heading as="h1" fontSize={30} fontFamily={"body"}>
              <GradientTextBlue>LIFE</GradientTextBlue>
            </Heading>
          </GridItem>
          <GridItem
            colSpan={[1, 2]}
            alignItems="center"
            h={500}
            position={"relative"}
          >
            <BlurImage img={landingImage} originalSize={false} />
          </GridItem>
        </SimpleGrid>
      </Container>
      <Container maxW="90%" mt={15}>
        <Section>
          <Heading as="h2" fontSize={25} mb={8} mt={12}>
            Recent posts from <GradientTextBlue>Atomico</GradientTextBlue>
          </Heading>

          <SimpleGrid columns={[1, 2, 4]} gap={3}>
            <AtomicGridItem id="journal" thumbnail={thumbJournal} />
            <AtomicGridItem id="cinque" thumbnail={thumbCinque} />
            <AtomicGridItem id="asturias" thumbnail={thumbAsturias} />
            <AtomicGridItem id="lanzarote" thumbnail={thumbLanzarote} />
          </SimpleGrid>
        </Section>
        <Heading as="h3" fontSize={30} mb={4} mt={8}>
          Atomic
        </Heading>

        <P>
          You may be wondering, what is Atomic? Is it a brand? Is an idea? what
          is Atomic to me? Well, at the moment is an unique thing and also
          englobes some ideas and prototypes. This idea came with my girlfriend,
          because usually call us things that represents small concepts, so we
          started calling us atomic, that is a single irreducible unit aka the
          tiniest thing ever. So then, I made a hoodie with this Atomic idea,
          and then a tshirt, and then a mirror, and then a journal, photos... so
          Atomic basically are the products/photos that I made in order to
          revive an experience with my most special person in earth.
        </P>
      </Container>
    </>
  );
};

export default Atomic;
