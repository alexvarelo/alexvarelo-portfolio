import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 2000ms ease;
  }
  &:hover img {
    transform: rotate(300deg);
  }
`

const Logo = () => {
    const sunFlowerImg = `/images/sunflower${useColorModeValue('', '-dark')}.png`;

    return (
        <Link href="/">
            <a>
                <LogoBox mb={1}>
                    <Image src={sunFlowerImg} width={24} height={24} alt="logo"></Image>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        //fontFamily="Gill Sans Extrabold, Helvetica, sans-serif"
                        fontWeight="bold"
                        ml={3} >
                        Alexvarelo
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo