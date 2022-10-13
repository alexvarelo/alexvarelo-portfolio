import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGlucNet from '../public/images/glucnet.PNG'
import thumbJustice from '../public/images/justice.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="glucnet" title="GlucNet" thumbnail={thumbGlucNet}>
                        A Glucose predictor personalized for each customer, where the patiens can know the levels of glucose are going to have in an interval of 30,60, 90 and 120 minutes
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="justicia" title="Justice" thumbnail={thumbJustice}>
                        Implementation of sytem capable of predict the number of judges the tribunals are going to need in order to supply the bankruptcy companies 
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works