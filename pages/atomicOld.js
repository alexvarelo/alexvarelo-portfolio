import {
  Container,
  SimpleGrid,
  Button,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Stack,
} from "@chakra-ui/react";
import Section from "../components/section";
import { AtomicGridItem } from "../components/grid-item";
import P from "../components/paragraph";
import {GradientTextBlue} from "../components/gradient";

import thumbCinque from "../public/atomico/cinque/thumbnailCinque.jpg";
import thumbAsturias from "../public/atomico/asturias/thumbnailAsturias.PNG";
import thumbJournal from "../public/atomico/journal/thumbnailJournal.jpg";
import thumbLanzarote from "../public/atomico/lanzarote/thumbnailLanzarote.JPG";

const AtomicOld = () => {
  return (
    <>
      <div className="main">
        <video src="/atomico/landing/wave.mp4" autoPlay loop muted />
        <div className="atomicTitle">
          <Heading as="h1" fontSize={60} fontFamily={"body"}>
            <GradientTextBlue>Atomico</GradientTextBlue>
          </Heading>
          <Heading as="h4" fontSize={25} fontFamily={"initial"}>
          Del átomo o relacionado con él.
        </Heading>
          <p fontFamily={"initial"}>Pues eso, lo que te he dicho.</p>
        </div>
      </div>
      <Container maxW="750px">
        {/* <iframe
        width="560"
        height="315"
        title=""
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loop="1"
        data-cookieconsent="marketing"
        style="display: block;"
        src="/atomico/landing/wave.mp4"
      ></iframe> */}
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
        <Heading as="h4" fontSize={20} mb={8} mt={10}>
          Main things Atomic stands for
        </Heading>

        <Stack direction="row" spacing={7} placeContent="center">
          <PopoverTags
            heading="Clothes"
            text="In Atomic we have made some different clothes"
            color="green"
          ></PopoverTags>
          <PopoverTags
            heading="Photos"
            text="Each experience is always matching with a photo coverage"
            color="blue"
          ></PopoverTags>
          <PopoverTags
            heading="Journal"
            text="For each essential memory, we have a front page journal. Also written my first Atomic journal"
            color="pink"
          ></PopoverTags>
          <PopoverTags
            heading="Experiences"
            text="Narrative of different experiences"
            color="orange"
          ></PopoverTags>
          <PopoverTags
            heading="Trips"
            text="In here we travel, a lot"
            color="purple"
          ></PopoverTags>
        </Stack>

        <Heading as="h4" fontSize={20} mb={8} mt={12}>
          Recent posts from <GradientTextBlue>Atomico</GradientTextBlue>
        </Heading>

        <SimpleGrid columns={[2, 2, 3]} gap={6}>
          <Section>
            <AtomicGridItem
              id="journal"
              title="Atomic Journal"
              thumbnail={thumbJournal}
              year="2020"
            >
              My first Journal
            </AtomicGridItem>
          </Section>
          <Section>
            <AtomicGridItem
              id="cinque"
              title="Cinque Terre"
              thumbnail={thumbCinque}
              year="2021"
            >
              7 days in Italy
            </AtomicGridItem>
          </Section>
          <Section>
            <AtomicGridItem
              id="asturias"
              title="Asturias"
              thumbnail={thumbAsturias}
              year="2021"
            >
              Asturias the new north
            </AtomicGridItem>
          </Section>
          <Section>
            <AtomicGridItem
              id="lanzarote"
              title="Lanzarote"
              thumbnail={thumbLanzarote}
              year="2022"
            >
              Asturias the new north
            </AtomicGridItem>
          </Section>
          {/* <Section>
                    <AtomicGridItem id="garda" title="Lago di Garda" thumbnail={thumbGarda} year="2020">
                        Trip to Lago di Garda
                    </AtomicGridItem>
                </Section> */}
        </SimpleGrid>
      </Container>
    </>
  );
};

const PopoverTags = ({ heading, text, color }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme={color}>{heading}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{heading}</PopoverHeader>
        <PopoverBody>{text}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default AtomicOld;
