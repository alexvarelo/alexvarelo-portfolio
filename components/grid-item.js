import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Badge} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
                alt="title"
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy" />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/works/${id}`}>
            <LinkBox cursor="pointer">
                    <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder='blur' />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const AtomicGridItem = ({ children, id, title, thumbnail, year}) => (
    <Box w="100%" align="center">
        <NextLink href={`/atomic/${id}`}>
            <LinkBox cursor="pointer">
                <Image width={230} height={380} src={thumbnail} alt={title} className="grid-item-thumbnail" blurDataURL placeholder='blur' />
                <LinkOverlay href={`/atomic/${id}`}>    
                    <Text mt={1} fontSize={20} fontWeight="2px">
                        {title}
                    </Text>
                </LinkOverlay>
                <Badge colorScheme="green">{year}</Badge><Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
        `}
    ></Global>
)