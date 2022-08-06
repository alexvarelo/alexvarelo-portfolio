import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, workImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="GlucNet">
            <Container>
                <Title>
                    GlucNet <Badge>2019</Badge>
                </Title>
                <P>
                    A glucose predictor for diabetes patients, where given some data the model predicts the levels
                    of glucose in an interval of 30, 60, 90 and 120 minutes.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>WebSite</Meta>
                        <Link href="http://glucmodel.dacya.ucm.es:8000/glucnet/">
                            http://glucmodel.dacya.ucm.es:8000/glucnet/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        Python, R, Django, Sql, Html, JS, CSS
                    </ListItem>
                    <ListItem>
                    <Meta>Article</Meta>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work;